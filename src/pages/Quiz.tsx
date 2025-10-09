import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { trainingData } from '@/data/trainingData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';

const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const quiz = trainingData.quizzes.find(q => q.id === quizId);
  const questions = trainingData.questions.filter(q => q.quiz_id === quizId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState(quiz?.timeLimitSec || 300);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isSubmitted || !quiz) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, quiz]);

  if (!quiz || questions.length === 0) {
    return <div>{t('quiz.not_found')}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (value: number | boolean) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      const userAnswer = answers[q.id];
      if (q.type === 'mcq' && userAnswer === q.answer_index) {
        correct++;
      } else if (q.type === 'truefalse' && userAnswer === q.answer) {
        correct++;
      }
    });

    const finalScore = Math.round((correct / questions.length) * 100);
    setScore(finalScore);
    setIsSubmitted(true);

    if (finalScore >= quiz.passingScore) {
      toast.success(t('quiz.passed') + ` (${finalScore}%)`);
    } else {
      toast.error(t('quiz.failed') + ` (${finalScore}%)`);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isSubmitted) {
    const passed = score >= quiz.passingScore;
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              {passed ? (
                <CheckCircle2 className="h-16 w-16 text-success" />
              ) : (
                <XCircle className="h-16 w-16 text-destructive" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {passed ? t('quiz.passed') : t('quiz.failed')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <div className="text-4xl font-bold mb-2">{score}%</div>
              <p className="text-muted-foreground">
                {questions.filter(q => {
                  const userAnswer = answers[q.id];
                  if (q.type === 'mcq') return userAnswer === q.answer_index;
                  return userAnswer === q.answer;
                }).length} / {questions.length} {t('quiz.correct')}
              </p>
            </div>
            <Button onClick={() => navigate('/courses')} className="w-full">
              {t('course.back')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const prompt = language === 'en' ? currentQuestion.prompt_en : currentQuestion.prompt_fr;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              {language === 'en' ? quiz.title_en : quiz.title_fr}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t('quiz.question')} {currentQuestionIndex + 1} {t('quiz.of')} {questions.length}
            </p>
          </div>
          <Badge variant={timeRemaining < 60 ? 'destructive' : 'secondary'} className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {formatTime(timeRemaining)}
          </Badge>
        </div>

        <Progress value={progress} className="mb-6" />

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-normal">{prompt}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.type === 'mcq' && currentQuestion.options_en && (
              <RadioGroup
                value={answers[currentQuestion.id]?.toString()}
                onValueChange={(value) => handleAnswer(parseInt(value))}
              >
                {(language === 'en' ? currentQuestion.options_en : currentQuestion.options_fr)?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQuestion.type === 'truefalse' && (
              <RadioGroup
                value={answers[currentQuestion.id]?.toString()}
                onValueChange={(value) => handleAnswer(value === 'true')}
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="true" id="true" />
                  <Label htmlFor="true" className="flex-1 cursor-pointer">
                    {t('quiz.true')}
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="false" id="false" />
                  <Label htmlFor="false" className="flex-1 cursor-pointer">
                    {t('quiz.false')}
                  </Label>
                </div>
              </RadioGroup>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="flex-1"
              >
                {t('quiz.previous')}
              </Button>
              {currentQuestionIndex === questions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== questions.length}
                  className="flex-1"
                >
                  {t('quiz.submit')}
                </Button>
              ) : (
                <Button onClick={handleNext} className="flex-1">
                  {t('quiz.next')}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
