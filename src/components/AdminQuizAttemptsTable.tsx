import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

interface QuizAttempt {
  id: string;
  user_id: string;
  course_id: string;
  quiz_id: string;
  score: number | null;
  passed: boolean | null;
  started_at: string;
  submitted_at: string | null;
}

export const AdminQuizAttemptsTable = () => {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [profiles, setProfiles] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [attemptsRes, profilesRes] = await Promise.all([
        supabase.from('quiz_attempts').select('*').order('started_at', { ascending: false }),
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
            <TableHead>User</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Quiz</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Started</TableHead>
            <TableHead>Submitted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attempts.map((attempt) => (
            <TableRow key={attempt.id}>
              <TableCell className="font-medium">{profiles[attempt.user_id]}</TableCell>
              <TableCell>
                <Badge variant="outline">{attempt.course_id}</Badge>
              </TableCell>
              <TableCell>{attempt.quiz_id}</TableCell>
              <TableCell>{attempt.score ?? 'N/A'}</TableCell>
              <TableCell>
                <Badge variant={attempt.passed ? 'default' : 'destructive'}>
                  {attempt.passed ? 'Passed' : attempt.passed === false ? 'Failed' : 'Pending'}
                </Badge>
              </TableCell>
              <TableCell>{new Date(attempt.started_at).toLocaleString()}</TableCell>
              <TableCell>
                {attempt.submitted_at ? new Date(attempt.submitted_at).toLocaleString() : 'In Progress'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
