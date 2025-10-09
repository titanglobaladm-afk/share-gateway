import { useLanguage } from '@/contexts/LanguageContext';
import { trainingData } from '@/data/trainingData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('nav.courses')}</h1>
          <p className="text-muted-foreground">Browse and enroll in training courses</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingData.courses.map((course) => {
            const title = language === 'en' ? course.title_en : course.title_fr;
            const lessonsCount = trainingData.lessons.filter(
              l => l.course_id === course.id && l.locale === language
            ).length;
            const quizzesCount = trainingData.quizzes.filter(
              q => q.course_id === course.id
            ).length;

            return (
              <Card key={course.id} className="transition-all hover:shadow-lg flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{course.role_required}</Badge>
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>
                    {lessonsCount} {lessonsCount === 1 ? 'lesson' : 'lessons'} • {quizzesCount} {quizzesCount === 1 ? 'quiz' : 'quizzes'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link to={`/courses/${course.id}`}>
                    <Button className="w-full">View Course</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
