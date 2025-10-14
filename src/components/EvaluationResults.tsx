import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

interface EvaluationResultsProps {
  evaluation: {
    overall_score: number;
    passed: boolean;
  };
}

export const EvaluationResults = ({ evaluation }: EvaluationResultsProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('test.your_score')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-6xl font-bold text-center mb-4">
            {evaluation.overall_score}%
          </div>
          
          <Badge className={evaluation.passed ? 'bg-success text-white' : 'bg-destructive text-white'}>
            {evaluation.passed ? t('test.passed') : t('test.failed')}
          </Badge>
          
          <p className="mt-4 text-center">
            {evaluation.passed 
              ? t('test.passed_message')
              : t('test.failed_message')
            }
          </p>
          
          <div className="flex gap-2 justify-center mt-6">
            {evaluation.passed ? (
              <Button onClick={() => navigate('/my-courses')}>
                {t('test.start_training')}
              </Button>
            ) : (
              <Button onClick={() => navigate('/role-test')}>
                {t('test.try_again')}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
