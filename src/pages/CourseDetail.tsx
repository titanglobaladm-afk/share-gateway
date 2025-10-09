import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { trainingData } from '@/data/trainingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BookOpen, FileText, ArrowLeft } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { language, t } = useLanguage();

  const course = trainingData.courses.find(c => c.id === courseId);
  if (!course) return <div>Course not found</div>;

  const title = language === 'en' ? course.title_en : course.title_fr;
  const lessons = trainingData.lessons.filter(
    l => l.course_id === course.id && l.locale === language
  ).sort((a, b) => a.order - b.order);
  
  const quizzes = trainingData.quizzes.filter(q => q.course_id === course.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/courses">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
        </Link>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
              <Badge variant="secondary">{course.role_required}</Badge>
            </div>
          </div>
          <p className="text-muted-foreground">
            Complete all lessons and pass the quiz to finish this course
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {lessons.map((lesson, index) => (
                <div key={lesson.id}>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{lesson.title}</h3>
                      <div 
                        className="text-sm text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: lesson.content }}
                      />
                    </div>
                  </div>
                  {index < lessons.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Assessments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quizzes.map((quiz) => {
                const quizTitle = language === 'en' ? quiz.title_en : quiz.title_fr;
                const questionsCount = trainingData.questions.filter(
                  q => q.quiz_id === quiz.id
                ).length;

                return (
                  <div key={quiz.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">{quizTitle}</h3>
                      <p className="text-sm text-muted-foreground">
                        {questionsCount} questions • {Math.floor(quiz.timeLimitSec / 60)} min • Pass: {quiz.passingScore}%
                      </p>
                    </div>
                    <Link to={`/quiz/${quiz.id}`}>
                      <Button>{t('quiz.start')}</Button>
                    </Link>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
