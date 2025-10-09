import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

interface EvaluationResultsProps {
  evaluation: {
    cognitive_score: number;
    critical_thinking_score: number;
    technical_score: number;
    communication_score: number;
    situational_score: number;
    overall_score: number;
    recommendation: 'not_recommended' | 'recommended' | 'highly_recommended';
    ai_comments: string;
  };
}

export const EvaluationResults = ({ evaluation }: EvaluationResultsProps) => {
  const { t } = useLanguage();

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'highly_recommended':
        return 'bg-green-500';
      case 'recommended':
        return 'bg-blue-500';
      default:
        return 'bg-orange-500';
    }
  };

  const getRecommendationIcon = (rec: string) => {
    switch (rec) {
      case 'highly_recommended':
        return <CheckCircle2 className="h-5 w-5" />;
      case 'recommended':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return <XCircle className="h-5 w-5" />;
    }
  };

  const scoreCategories = [
    { key: 'cognitive', label: t('rubric.cognitive'), score: evaluation.cognitive_score },
    { key: 'critical', label: t('rubric.critical'), score: evaluation.critical_thinking_score },
    { key: 'technical', label: t('rubric.technical'), score: evaluation.technical_score },
    { key: 'communication', label: t('rubric.communication'), score: evaluation.communication_score },
    { key: 'situational', label: t('rubric.situational'), score: evaluation.situational_score },
  ];

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t('aptitude.results')}</CardTitle>
          <CardDescription>{t('eval.overall')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">{evaluation.overall_score}%</span>
            <Badge className={getRecommendationColor(evaluation.recommendation)}>
              <span className="flex items-center gap-2">
                {getRecommendationIcon(evaluation.recommendation)}
                {t(`rubric.${evaluation.recommendation}`)}
              </span>
            </Badge>
          </div>
          <Progress value={evaluation.overall_score} className="h-3" />
        </CardContent>
      </Card>

      {/* Category Scores */}
      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {scoreCategories.map((category) => (
            <div key={category.key} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{category.label}</span>
                <span className="text-muted-foreground">{category.score}/5</span>
              </div>
              <Progress value={(category.score / 5) * 100} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Comments */}
      <Card>
        <CardHeader>
          <CardTitle>{t('eval.comments')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            {evaluation.ai_comments}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
