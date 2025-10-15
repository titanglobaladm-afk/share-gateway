import { useNavigate } from 'react-router-dom';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AdminUserTable } from '@/components/AdminUserTable';
import { AdminTestAttemptsTable } from '@/components/AdminTestAttemptsTable';
import { AdminQuizAttemptsTable } from '@/components/AdminQuizAttemptsTable';
import { Loader2, Shield } from 'lucide-react';

const AdminDashboard = () => {
  const { isAdmin, loading } = useAdminCheck();
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users, tests, and system oversight</p>
          </div>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="tests">Test Attempts</TabsTrigger>
            <TabsTrigger value="quizzes">Quiz Attempts</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  View all users, their roles, and onboarding status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminUserTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Aptitude Test Attempts</CardTitle>
                <CardDescription>
                  Monitor all aptitude test attempts with scores and detailed answers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminTestAttemptsTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quizzes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Quiz Attempts</CardTitle>
                <CardDescription>
                  View all quiz attempts across all courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminQuizAttemptsTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
