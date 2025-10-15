import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Loader2, GraduationCap } from 'lucide-react';
import { trainingData } from '@/data/trainingData';
import { ManualGradingModal } from './ManualGradingModal';

interface TestAttempt {
  id: string;
  user_id: string;
  role: string;
  score: number | null;
  passed: boolean | null;
  started_at: string;
  completed_at: string | null;
}

interface TestAnswer {
  id: string;
  question_id: string;
  answer: string;
  is_correct: boolean | null;
}

export const AdminTestAttemptsTable = () => {
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);
  const [answers, setAnswers] = useState<Record<string, TestAnswer[]>>({});
  const [expandedAttempt, setExpandedAttempt] = useState<string | null>(null);
  const [profiles, setProfiles] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [gradingModalOpen, setGradingModalOpen] = useState(false);
  const [selectedAttempt, setSelectedAttempt] = useState<{
    id: string;
    userName: string;
    answers: TestAnswer[];
  } | null>(null);

  // Build questions map from trainingData
  const questionsMap = trainingData.questions
    .filter((q: any) => q.quiz_id === 'aptitude_test_general')
    .reduce((acc: any, q: any) => {
      acc[q.id] = q;
      return acc;
    }, {});

  useEffect(() => {
    const fetchData = async () => {
      const [attemptsRes, profilesRes] = await Promise.all([
        supabase.from('aptitude_test_attempts').select('*').order('started_at', { ascending: false }),
        supabase.from('profiles').select('user_id, full_name')
      ]);

      if (attemptsRes.data) setAttempts(attemptsRes.data);
      
      if (profilesRes.data) {
        const profilesMap: Record<string, string> = {};
        profilesRes.data.forEach((p: any) => {
          profilesMap[p.user_id] = p.full_name || 'Unknown';
        });
        setProfiles(profilesMap);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const loadAnswers = async (attemptId: string) => {
    if (answers[attemptId]) {
      setExpandedAttempt(expandedAttempt === attemptId ? null : attemptId);
      return;
    }

    const { data } = await supabase
      .from('aptitude_test_answers')
      .select('*')
      .eq('attempt_id', attemptId);

    if (data) {
      setAnswers({ ...answers, [attemptId]: data });
      setExpandedAttempt(attemptId);
    }
  };

  const openGradingModal = async (attemptId: string, userId: string) => {
    if (!answers[attemptId]) {
      const { data } = await supabase
        .from('aptitude_test_answers')
        .select('*')
        .eq('attempt_id', attemptId);
      
      if (data) {
        setAnswers({ ...answers, [attemptId]: data });
      }
    }

    setSelectedAttempt({
      id: attemptId,
      userName: profiles[userId] || 'Unknown User',
      answers: answers[attemptId] || [],
    });
    setGradingModalOpen(true);
  };

  const getUngradedCount = (attemptAnswers: TestAnswer[]) => {
    return attemptAnswers.filter((a) => a.is_correct === null).length;
  };

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10"></TableHead>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Started</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
        <TableBody>
          {attempts.map((attempt) => (
            <>
              <TableRow key={attempt.id}>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => loadAnswers(attempt.id)}
                  >
                    {expandedAttempt === attempt.id ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{profiles[attempt.user_id]}</TableCell>
                <TableCell>
                  <Badge variant="outline">{attempt.role}</Badge>
                </TableCell>
                <TableCell>{attempt.score ?? 'N/A'}</TableCell>
                <TableCell>
                  <Badge variant={attempt.passed ? 'default' : 'destructive'}>
                    {attempt.passed ? 'Passed' : attempt.passed === false ? 'Failed' : 'Pending'}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(attempt.started_at).toLocaleString()}</TableCell>
                <TableCell>
                  {attempt.completed_at ? new Date(attempt.completed_at).toLocaleString() : 'In Progress'}
                </TableCell>
                <TableCell>
                  {answers[attempt.id] && getUngradedCount(answers[attempt.id]) > 0 && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openGradingModal(attempt.id, attempt.user_id)}
                    >
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Grade ({getUngradedCount(answers[attempt.id])})
                    </Button>
                  )}
                </TableCell>
              </TableRow>
              {expandedAttempt === attempt.id && answers[attempt.id] && (
                <TableRow>
                  <TableCell colSpan={8} className="bg-muted/50 p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">
                          Detailed Answers ({answers[attempt.id].length} questions)
                        </h4>
                        {getUngradedCount(answers[attempt.id]) > 0 && (
                          <Button
                            size="sm"
                            onClick={() => openGradingModal(attempt.id, attempt.user_id)}
                          >
                            <GraduationCap className="h-4 w-4 mr-2" />
                            Grade Unscored ({getUngradedCount(answers[attempt.id])})
                          </Button>
                        )}
                      </div>
                      
                      {answers[attempt.id].map((answer, idx) => {
                        const question = questionsMap[answer.question_id];
                        if (!question) {
                          return (
                            <div key={idx} className="border rounded p-3 bg-card">
                              <div className="text-sm text-muted-foreground">
                                Question ID: {answer.question_id} (not found in database)
                              </div>
                              <div className="mt-2 text-sm">
                                <strong>Answer:</strong> {answer.answer}
                              </div>
                            </div>
                          );
                        }

                        const getBadgeVariant = () => {
                          if (answer.is_correct === true) return 'default';
                          if (answer.is_correct === false) return 'destructive';
                          return 'outline';
                        };

                        const getStatusIcon = () => {
                          if (answer.is_correct === true) return '✓';
                          if (answer.is_correct === false) return '✗';
                          return '?';
                        };

                        return (
                          <div key={idx} className="border rounded p-3 bg-card space-y-2">
                            <div className="flex items-start gap-2">
                              <Badge variant={getBadgeVariant()} className="mt-0.5 shrink-0">
                                {getStatusIcon()}
                              </Badge>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className={
                                      question.type === 'mcq'
                                        ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
                                        : question.type === 'truefalse'
                                        ? 'bg-green-500/10 text-green-700 dark:text-green-300'
                                        : question.type === 'short'
                                        ? 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300'
                                        : 'bg-purple-500/10 text-purple-700 dark:text-purple-300'
                                    }
                                  >
                                    {question.type === 'mcq'
                                      ? 'Multiple Choice'
                                      : question.type === 'truefalse'
                                      ? 'True/False'
                                      : question.type === 'short'
                                      ? 'Short Answer'
                                      : 'Essay'}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    Question #{idx + 1}
                                  </span>
                                </div>
                                
                                <div className="font-medium text-sm">{question.prompt_en}</div>
                                {question.prompt_fr && (
                                  <div className="text-xs text-muted-foreground italic">
                                    {question.prompt_fr}
                                  </div>
                                )}

                                <div className="mt-2 p-2 bg-muted/50 rounded text-sm">
                                  <div className="font-medium text-xs text-muted-foreground mb-1">
                                    Student Answer:
                                  </div>
                                  <div>{answer.answer}</div>
                                </div>

                                {question.type === 'mcq' && question.options_en && (
                                  <div className="mt-2 text-sm">
                                    <div className="font-medium text-xs text-muted-foreground mb-1">
                                      Correct Answer:
                                    </div>
                                    <div className="text-green-600 dark:text-green-400">
                                      {question.options_en[question.answer_index]}
                                    </div>
                                  </div>
                                )}

                                {question.type === 'truefalse' && (
                                  <div className="mt-2 text-sm">
                                    <div className="font-medium text-xs text-muted-foreground mb-1">
                                      Correct Answer:
                                    </div>
                                    <div className="text-green-600 dark:text-green-400">
                                      {question.answer ? 'True' : 'False'}
                                    </div>
                                  </div>
                                )}

                                {answer.is_correct === null && (
                                  <Badge variant="outline" className="mt-2">
                                    Requires Manual Grading
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>

    {selectedAttempt && (
      <ManualGradingModal
        open={gradingModalOpen}
        onOpenChange={setGradingModalOpen}
        attemptId={selectedAttempt.id}
        userName={selectedAttempt.userName}
        answers={selectedAttempt.answers}
        questionsMap={questionsMap}
      />
    )}
  </>
  );
};
