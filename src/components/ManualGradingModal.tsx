import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

interface TestAnswer {
  id: string;
  question_id: string;
  answer: string;
  is_correct: boolean | null;
}

interface ManualScore {
  answer_id: string;
  score: number;
  feedback: string;
}

interface QuestionData {
  id: string;
  type: string;
  prompt_en: string;
  prompt_fr: string;
}

interface ManualGradingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  attemptId: string;
  userName: string;
  answers: TestAnswer[];
  questionsMap: Record<string, QuestionData>;
}

export const ManualGradingModal = ({
  open,
  onOpenChange,
  attemptId,
  userName,
  answers,
  questionsMap,
}: ManualGradingModalProps) => {
  const [scores, setScores] = useState<Record<string, ManualScore>>({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [existingScores, setExistingScores] = useState<Record<string, any>>({});

  const ungradedAnswers = answers.filter(
    (a) => a.is_correct === null && questionsMap[a.question_id]
  );

  useEffect(() => {
    if (open && ungradedAnswers.length > 0) {
      loadExistingScores();
    }
  }, [open, attemptId]);

  const loadExistingScores = async () => {
    setLoading(true);
    const answerIds = ungradedAnswers.map((a) => a.id);
    const { data } = await supabase
      .from('manual_answer_scores')
      .select('*')
      .in('answer_id', answerIds);

    if (data) {
      const scoresMap: Record<string, any> = {};
      const initialScores: Record<string, ManualScore> = {};
      
      data.forEach((score) => {
        scoresMap[score.answer_id] = score;
        initialScores[score.answer_id] = {
          answer_id: score.answer_id,
          score: score.score,
          feedback: score.feedback || '',
        };
      });
      
      setExistingScores(scoresMap);
      setScores(initialScores);
    }
    setLoading(false);
  };

  const updateScore = (answerId: string, score: number) => {
    setScores((prev) => ({
      ...prev,
      [answerId]: {
        answer_id: answerId,
        score,
        feedback: prev[answerId]?.feedback || '',
      },
    }));
  };

  const updateFeedback = (answerId: string, feedback: string) => {
    setScores((prev) => ({
      ...prev,
      [answerId]: {
        answer_id: answerId,
        score: prev[answerId]?.score ?? 5,
        feedback,
      },
    }));
  };

  const saveScore = async (answerId: string) => {
    const scoreData = scores[answerId];
    if (!scoreData) return;

    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const payload = {
        answer_id: answerId,
        grader_user_id: user.id,
        score: scoreData.score,
        feedback: scoreData.feedback,
      };

      if (existingScores[answerId]) {
        await supabase
          .from('manual_answer_scores')
          .update(payload)
          .eq('answer_id', answerId);
      } else {
        await supabase.from('manual_answer_scores').insert(payload);
      }

      setExistingScores((prev) => ({
        ...prev,
        [answerId]: { ...payload, id: existingScores[answerId]?.id || answerId },
      }));

      toast.success('Score saved successfully');
    } catch (error) {
      console.error('Error saving score:', error);
      toast.error('Failed to save score');
    } finally {
      setSaving(false);
    }
  };

  const recalculateTestScore = async () => {
    setSaving(true);
    try {
      // Fetch all answers for this attempt
      const { data: allAnswers } = await supabase
        .from('aptitude_test_answers')
        .select('*')
        .eq('attempt_id', attemptId);

      if (!allAnswers) throw new Error('Failed to fetch answers');

      // Fetch all manual scores
      const { data: manualScores } = await supabase
        .from('manual_answer_scores')
        .select('*')
        .in('answer_id', allAnswers.map((a) => a.id));

      const manualScoresMap: Record<string, number> = {};
      manualScores?.forEach((ms) => {
        manualScoresMap[ms.answer_id] = ms.score;
      });

      // Calculate total score
      let totalScore = 0;
      let totalQuestions = allAnswers.length;

      allAnswers.forEach((answer) => {
        if (answer.is_correct === true) {
          totalScore += 10; // Auto-graded correct = 10 points
        } else if (answer.is_correct === false) {
          totalScore += 0; // Auto-graded incorrect = 0 points
        } else if (manualScoresMap[answer.id] !== undefined) {
          totalScore += manualScoresMap[answer.id]; // Manual score (0-10)
        }
      });

      const finalScore = Math.round((totalScore / (totalQuestions * 10)) * 100);
      const passed = finalScore >= 60;

      // Update attempt
      await supabase
        .from('aptitude_test_attempts')
        .update({ score: finalScore, passed })
        .eq('id', attemptId);

      toast.success(`Test recalculated: ${finalScore}% (${passed ? 'Passed' : 'Failed'})`);
      onOpenChange(false);
    } catch (error) {
      console.error('Error recalculating score:', error);
      toast.error('Failed to recalculate score');
    } finally {
      setSaving(false);
    }
  };

  const gradedCount = ungradedAnswers.filter((a) => existingScores[a.id]).length;

  if (loading) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <div className="flex justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Manual Grading - {userName}</DialogTitle>
          <DialogDescription>
            Grade open-ended questions (short answer & essay). Score each answer 0-10.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Progress:</span>
            <span>{gradedCount} of {ungradedAnswers.length} graded</span>
            {gradedCount === ungradedAnswers.length && (
              <Badge variant="default" className="ml-2">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Complete
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {ungradedAnswers.map((answer) => {
            const question = questionsMap[answer.question_id];
            if (!question) return null;

            const currentScore = scores[answer.id];
            const isGraded = !!existingScores[answer.id];

            return (
              <div
                key={answer.id}
                className="border rounded-lg p-4 space-y-3 bg-card"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge
                      variant="outline"
                      className={
                        question.type === 'essay'
                          ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300'
                          : 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300'
                      }
                    >
                      {question.type === 'essay' ? 'Essay' : 'Short Answer'}
                    </Badge>
                    <h4 className="font-semibold mt-2">{question.prompt_en}</h4>
                    {question.prompt_fr && (
                      <p className="text-sm text-muted-foreground italic">
                        {question.prompt_fr}
                      </p>
                    )}
                  </div>
                  {isGraded && (
                    <Badge variant="default">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Graded
                    </Badge>
                  )}
                </div>

                <div className="bg-muted/50 p-3 rounded border">
                  <Label className="text-xs text-muted-foreground">Student Answer:</Label>
                  <p className="text-sm mt-1 whitespace-pre-wrap">{answer.answer}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {answer.answer.length} characters
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">
                      Score: {currentScore?.score ?? 5}/10
                    </Label>
                    <Slider
                      value={[currentScore?.score ?? 5]}
                      onValueChange={([value]) => updateScore(answer.id, value)}
                      min={0}
                      max={10}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0 (Poor)</span>
                      <span>5 (Average)</span>
                      <span>10 (Excellent)</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Feedback (Optional)</Label>
                    <Textarea
                      placeholder="Provide constructive feedback..."
                      value={currentScore?.feedback || ''}
                      onChange={(e) => updateFeedback(answer.id, e.target.value)}
                      rows={2}
                      className="mt-1"
                    />
                  </div>

                  <Button
                    onClick={() => saveScore(answer.id)}
                    disabled={saving || !currentScore}
                    size="sm"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : isGraded ? (
                      'Update Score'
                    ) : (
                      'Save Score'
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t pt-4 mt-6 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            After grading all questions, recalculate the final test score.
          </p>
          <Button
            onClick={recalculateTestScore}
            disabled={saving || gradedCount < ungradedAnswers.length}
            variant="default"
          >
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Calculating...
              </>
            ) : (
              'Recalculate Final Score'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
