import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AptitudeAnswer {
  question_id: string;
  answer: string;
  is_correct: boolean | null;
}

interface EvaluationScores {
  cognitive_score: number;
  critical_thinking_score: number;
  technical_score: number;
  communication_score: number;
  situational_score: number;
  overall_score: number;
  recommendation: 'not_recommended' | 'recommended' | 'highly_recommended';
  comments: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting aptitude test evaluation...');

    const { attemptId } = await req.json();
    
    if (!attemptId) {
      throw new Error('attemptId is required');
    }

    console.log(`Evaluating attempt: ${attemptId}`);

    // Get Supabase client with service role for admin access
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Fetch test attempt and all answers
    const { data: attempt, error: attemptError } = await supabaseClient
      .from('aptitude_test_attempts')
      .select(`
        *,
        aptitude_test_answers (*)
      `)
      .eq('id', attemptId)
      .single();

    if (attemptError) {
      console.error('Error fetching attempt:', attemptError);
      throw attemptError;
    }

    console.log(`Found ${attempt.aptitude_test_answers.length} answers to evaluate`);

    // Build evaluation prompt
    const prompt = buildEvaluationPrompt(attempt.aptitude_test_answers);

    console.log('Calling Lovable AI for evaluation...');

    // Call Lovable AI with structured output
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('LOVABLE_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: `You are an expert evaluator for healthcare workers in mobile clinics in Haiti. Evaluate candidates objectively based on their responses to aptitude test questions covering cognitive abilities, critical thinking, technical skills, communication, and situational judgment.

Scoring criteria (1-5 scale):
- Cognitive Abilities: Pattern recognition, memory, comprehension, logical reasoning
- Critical Thinking: Problem analysis, decision-making, prioritization
- Technical Skills: Healthcare knowledge, safety protocols, proper procedures
- Communication: Clarity, professionalism, empathy, written expression
- Situational Judgment: Ethics, teamwork, conflict resolution, integrity

Overall Score (0-100): Weighted average across all categories
Recommendation:
- not_recommended: Score < 50 or critical red flags
- recommended: Score 50-79, suitable for training
- highly_recommended: Score ≥ 80, exceptional candidate` 
          },
          { role: 'user', content: prompt }
        ],
        tools: [{
          type: 'function',
          function: {
            name: 'evaluate_candidate',
            description: 'Provide structured evaluation scores for the aptitude test',
            parameters: {
              type: 'object',
              properties: {
                cognitive_score: { 
                  type: 'integer', 
                  minimum: 1, 
                  maximum: 5,
                  description: 'Score for cognitive abilities (pattern recognition, memory, comprehension)'
                },
                critical_thinking_score: { 
                  type: 'integer', 
                  minimum: 1, 
                  maximum: 5,
                  description: 'Score for critical thinking (problem analysis, decision-making)'
                },
                technical_score: { 
                  type: 'integer', 
                  minimum: 1, 
                  maximum: 5,
                  description: 'Score for technical skills (healthcare knowledge, safety protocols)'
                },
                communication_score: { 
                  type: 'integer', 
                  minimum: 1, 
                  maximum: 5,
                  description: 'Score for communication (clarity, professionalism, empathy)'
                },
                situational_score: { 
                  type: 'integer', 
                  minimum: 1, 
                  maximum: 5,
                  description: 'Score for situational judgment (ethics, teamwork, integrity)'
                },
                overall_score: { 
                  type: 'integer', 
                  minimum: 0, 
                  maximum: 100,
                  description: 'Overall weighted score across all categories'
                },
                recommendation: { 
                  type: 'string', 
                  enum: ['not_recommended', 'recommended', 'highly_recommended'],
                  description: 'Final hiring recommendation'
                },
                comments: { 
                  type: 'string',
                  description: 'Detailed feedback including strengths, areas for improvement, and rationale for recommendation'
                }
              },
              required: ['cognitive_score', 'critical_thinking_score', 'technical_score', 'communication_score', 'situational_score', 'overall_score', 'recommendation', 'comments']
            }
          }
        }],
        tool_choice: { type: 'function', function: { name: 'evaluate_candidate' } }
      }),
    });

    if (!aiResponse.ok) {
      if (aiResponse.status === 429) {
        console.error('Rate limit exceeded');
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      const errorText = await aiResponse.text();
      console.error(`AI API error (${aiResponse.status}):`, errorText);
      throw new Error(`AI API error: ${aiResponse.status} - ${errorText}`);
    }

    const aiData = await aiResponse.json();
    console.log('AI response received:', JSON.stringify(aiData, null, 2));

    // Extract evaluation from tool call
    const toolCall = aiData.choices[0].message.tool_calls?.[0];
    if (!toolCall) {
      throw new Error('No tool call in AI response');
    }

    const evaluation: EvaluationScores = JSON.parse(toolCall.function.arguments);
    console.log('Parsed evaluation:', evaluation);

    // Store evaluation in database
    const { data: evaluationRecord, error: evalError } = await supabaseClient
      .from('ai_evaluations')
      .insert({
        user_id: attempt.user_id,
        attempt_id: attemptId,
        evaluation_type: 'aptitude',
        cognitive_score: evaluation.cognitive_score,
        critical_thinking_score: evaluation.critical_thinking_score,
        technical_score: evaluation.technical_score,
        communication_score: evaluation.communication_score,
        situational_score: evaluation.situational_score,
        overall_score: evaluation.overall_score,
        recommendation: evaluation.recommendation,
        ai_comments: evaluation.comments,
        raw_ai_response: aiData
      })
      .select()
      .single();

    if (evalError) {
      console.error('Error storing evaluation:', evalError);
      throw evalError;
    }

    console.log('Evaluation stored successfully');

    // Update attempt with score and pass/fail
    const passed = evaluation.overall_score >= 60;
    const { error: updateError } = await supabaseClient
      .from('aptitude_test_attempts')
      .update({
        score: evaluation.overall_score,
        passed: passed,
        completed_at: new Date().toISOString()
      })
      .eq('id', attemptId);

    if (updateError) {
      console.error('Error updating attempt:', updateError);
      throw updateError;
    }

    console.log(`Evaluation complete. Score: ${evaluation.overall_score}, Passed: ${passed}`);

    return new Response(JSON.stringify({ 
      success: true,
      evaluation: evaluationRecord,
      passed: passed
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Evaluation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred during evaluation';
    const errorDetails = error instanceof Error ? error.toString() : String(error);
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      details: errorDetails
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});

function buildEvaluationPrompt(answers: AptitudeAnswer[]): string {
  // Group answers by category based on question IDs
  const categorized = {
    cognitive: [] as AptitudeAnswer[],
    critical_thinking: [] as AptitudeAnswer[],
    technical: [] as AptitudeAnswer[],
    communication: [] as AptitudeAnswer[],
    situational: [] as AptitudeAnswer[]
  };

  // Map question IDs to categories (based on the question structure we created)
  const questionCategories: Record<string, keyof typeof categorized> = {
    'apt_q1': 'cognitive', 'apt_q2': 'cognitive', 'apt_q3': 'cognitive', 
    'apt_q4': 'cognitive', 'apt_q5': 'cognitive',
    'apt_q6': 'critical_thinking', 'apt_q7': 'critical_thinking', 'apt_q8': 'critical_thinking',
    'apt_q9': 'critical_thinking', 'apt_q10': 'critical_thinking', 'apt_q11': 'critical_thinking',
    'apt_q12': 'technical', 'apt_q13': 'technical', 'apt_q14': 'technical',
    'apt_q15': 'technical', 'apt_q16': 'technical', 'apt_q17': 'technical', 'apt_q18': 'technical',
    'apt_q19': 'communication', 'apt_q20': 'communication', 'apt_q21': 'communication',
    'apt_q22': 'communication', 'apt_q23': 'communication', 'apt_q24': 'communication',
    'apt_q25': 'situational', 'apt_q26': 'situational', 'apt_q27': 'situational',
    'apt_q28': 'situational', 'apt_q29': 'situational', 'apt_q30': 'situational',
    'apt_q31': 'situational', 'apt_q32': 'situational'
  };

  // Categorize answers
  answers.forEach(answer => {
    const category = questionCategories[answer.question_id];
    if (category) {
      categorized[category].push(answer);
    }
  });

  let prompt = `Please evaluate this candidate's aptitude test responses for a mobile healthcare position in Haiti.\n\n`;

  // Add each category
  if (categorized.cognitive.length > 0) {
    prompt += `## COGNITIVE ABILITIES\n`;
    categorized.cognitive.forEach((a, i) => {
      prompt += `Q${i+1}: ${a.question_id}\nAnswer: ${a.answer}\nCorrect: ${a.is_correct ?? 'N/A'}\n\n`;
    });
  }

  if (categorized.critical_thinking.length > 0) {
    prompt += `## CRITICAL THINKING\n`;
    categorized.critical_thinking.forEach((a, i) => {
      prompt += `Q${i+1}: ${a.question_id}\nAnswer: ${a.answer}\nCorrect: ${a.is_correct ?? 'N/A'}\n\n`;
    });
  }

  if (categorized.technical.length > 0) {
    prompt += `## TECHNICAL SKILLS\n`;
    categorized.technical.forEach((a, i) => {
      prompt += `Q${i+1}: ${a.question_id}\nAnswer: ${a.answer}\nCorrect: ${a.is_correct ?? 'N/A'}\n\n`;
    });
  }

  if (categorized.communication.length > 0) {
    prompt += `## COMMUNICATION & PROFESSIONALISM\n`;
    categorized.communication.forEach((a, i) => {
      prompt += `Q${i+1}: ${a.question_id}\nAnswer: ${a.answer}\nCorrect: ${a.is_correct ?? 'N/A'}\n\n`;
    });
  }

  if (categorized.situational.length > 0) {
    prompt += `## SITUATIONAL JUDGMENT\n`;
    categorized.situational.forEach((a, i) => {
      prompt += `Q${i+1}: ${a.question_id}\nAnswer: ${a.answer}\nCorrect: ${a.is_correct ?? 'N/A'}\n\n`;
    });
  }

  prompt += `\nProvide a comprehensive evaluation with scores (1-5) for each category, an overall score (0-100), a recommendation (not_recommended/recommended/highly_recommended), and detailed comments explaining your assessment.`;

  return prompt;
}
