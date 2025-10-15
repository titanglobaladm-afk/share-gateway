import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Loader2 } from 'lucide-react';

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

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
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
              </TableRow>
              {expandedAttempt === attempt.id && answers[attempt.id] && (
                <TableRow>
                  <TableCell colSpan={7} className="bg-muted/50 p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Answers ({answers[attempt.id].length}):</h4>
                      {answers[attempt.id].map((answer, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <Badge variant={answer.is_correct ? 'default' : 'destructive'} className="mt-0.5">
                            {answer.is_correct ? '✓' : '✗'}
                          </Badge>
                          <div>
                            <div className="font-medium">{answer.question_id}</div>
                            <div className="text-muted-foreground">{answer.answer}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
