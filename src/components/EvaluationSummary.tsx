import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

interface EvaluationSummaryProps {
  evaluation: {
    id: string;
    overall_score: number;
    passed: boolean;
    created_at: string;
  };
}

export const EvaluationSummary = ({ evaluation }: EvaluationSummaryProps) => {
  const { t } = useLanguage();

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          {t('aptitude.results')}
        </CardTitle>
        <Badge className={evaluation.passed ? 'bg-success' : 'bg-destructive'}>
          {evaluation.passed ? t('test.passed') : t('test.failed')}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{t('eval.overall')}</span>
          <span className="text-2xl font-bold">{evaluation.overall_score}%</span>
        </div>
        <Progress value={evaluation.overall_score} className="h-2" />
        
        <div className="text-sm text-muted-foreground">
          {format(new Date(evaluation.created_at), 'MMM d, yyyy')}
        </div>

        <Link to={`/evaluation/${evaluation.id}`} className="block mt-4">
          <Button variant="outline" className="w-full">
            {t('eval.view_full')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
