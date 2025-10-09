import { useLanguage } from '@/contexts/LanguageContext';
import { trainingData } from '@/data/trainingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

const MyCourses = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{t('nav.my_courses')}</h1>
          <p className="text-muted-foreground">{t('my_courses.subtitle')}</p>
        </div>

        <div className="grid gap-6">
          {trainingData.courses.map((course) => {
            const title = language === 'en' ? course.title_en : course.title_fr;
            
            return (
              <Card key={course.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t('my_courses.role')}: {course.role_required} • {t('my_courses.version')} {course.version}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{t('my_courses.progress')}</span>
                          <span className="font-semibold">0%</span>
                        </div>
                        <Progress value={0} />
                      </div>
                    </div>
                    <Link to={`/courses/${course.id}`}>
                      <Button>{t('dashboard.continue')}</Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">{t('course.lessons')}:</span>{' '}
                      <span className="font-semibold">0/1</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t('courses.quizzes')}:</span>{' '}
                      <span className="font-semibold">0/1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
