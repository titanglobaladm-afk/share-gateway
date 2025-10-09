import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brain, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

interface EvaluationSummaryProps {
  evaluation: {
    cognitive_score: number;
    critical_thinking_score: number;
    technical_score: number;
    communication_score: number;
    situational_score: number;
    overall_score: number;
    recommendation: 'not_recommended' | 'recommended' | 'highly_recommended';
    created_at: string;
  };
}

export const EvaluationSummary = ({ evaluation }: EvaluationSummaryProps) => {
  const { t } = useLanguage();

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'highly_recommended':
        return 'bg-success';
      case 'recommended':
        return 'bg-primary';
      default:
        return 'bg-warning';
    }
  };

  const getRecommendationIcon = (rec: string) => {
    switch (rec) {
      case 'highly_recommended':
        return <CheckCircle2 className="h-4 w-4" />;
      case 'recommended':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <XCircle className="h-4 w-4" />;
    }
  };

  const averageScore = Math.round(
    (evaluation.cognitive_score +
      evaluation.critical_thinking_score +
      evaluation.technical_score +
      evaluation.communication_score +
      evaluation.situational_score) / 5
  );

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          {t('aptitude.results')}
        </CardTitle>
        <Badge className={getRecommendationColor(evaluation.recommendation)}>
          <span className="flex items-center gap-1.5">
            {getRecommendationIcon(evaluation.recommendation)}
            {t(`rubric.${evaluation.recommendation}`)}
          </span>
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{t('eval.overall')}</span>
          <span className="text-2xl font-bold">{evaluation.overall_score}%</span>
        </div>
        <Progress value={evaluation.overall_score} className="h-2" />
        
        <div className="grid grid-cols-2 gap-3 pt-2 text-sm">
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t('rubric.cognitive')}</span>
              <span className="font-medium">{evaluation.cognitive_score}/5</span>
            </div>
            <Progress value={(evaluation.cognitive_score / 5) * 100} className="h-1" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t('rubric.critical')}</span>
              <span className="font-medium">{evaluation.critical_thinking_score}/5</span>
            </div>
            <Progress value={(evaluation.critical_thinking_score / 5) * 100} className="h-1" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t('rubric.technical')}</span>
              <span className="font-medium">{evaluation.technical_score}/5</span>
            </div>
            <Progress value={(evaluation.technical_score / 5) * 100} className="h-1" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{t('rubric.communication')}</span>
              <span className="font-medium">{evaluation.communication_score}/5</span>
            </div>
            <Progress value={(evaluation.communication_score / 5) * 100} className="h-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
