import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { trainingData } from '@/data/trainingData';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface AptitudeTestProps {
  onComplete: (answers: Record<string, string>) => void;
}

export const AptitudeTest = ({ onComplete }: AptitudeTestProps) => {
  const { language, t } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes in seconds

  // Get aptitude test questions
  const aptitudeQuestions = trainingData.questions.filter(
    q => q.quiz_id === 'aptitude_test_general'
  );

  const currentQuestion = aptitudeQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / aptitudeQuestions.length) * 100;

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < aptitudeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    onComplete(answers);
  };

  const isLastQuestion = currentQuestionIndex === aptitudeQuestions.length - 1;
  const isAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <div className="space-y-6">
      {/* Timer and Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {t('quiz.question')} {currentQuestionIndex + 1} {t('quiz.of')} {aptitudeQuestions.length}
          </span>
          <div className="flex items-center gap-2 text-orange-600 font-medium">
            <Clock className="h-4 w-4" />
            {formatTime(timeRemaining)}
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'fr' ? currentQuestion.prompt_fr : currentQuestion.prompt_en}
            </h3>

            {/* MCQ */}
            {currentQuestion.type === 'mcq' && currentQuestion.options_en && (
              <RadioGroup 
                value={answers[currentQuestion.id]} 
                onValueChange={handleAnswerChange}
              >
                {(language === 'fr' ? currentQuestion.options_fr : currentQuestion.options_en)?.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent">
                    <RadioGroupItem value={String(idx)} id={`option-${idx}`} />
                    <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer font-normal">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {/* True/False */}
            {currentQuestion.type === 'truefalse' && (
              <RadioGroup 
                value={answers[currentQuestion.id]} 
                onValueChange={handleAnswerChange}
              >
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent">
                  <RadioGroupItem value="true" id="true" />
                  <Label htmlFor="true" className="flex-1 cursor-pointer font-normal">
                    {t('quiz.true')}
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent">
                  <RadioGroupItem value="false" id="false" />
                  <Label htmlFor="false" className="flex-1 cursor-pointer font-normal">
                    {t('quiz.false')}
                  </Label>
                </div>
              </RadioGroup>
            )}

            {/* Short Answer */}
            {currentQuestion.type === 'short' && (
              <Textarea
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
                placeholder={t('quiz.type_answer')}
                className="min-h-[100px]"
              />
            )}

            {/* Essay */}
            {currentQuestion.type === 'essay' && (
              <Textarea
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
                placeholder={t('quiz.type_essay')}
                className="min-h-[200px]"
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              {t('quiz.previous')}
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={handleSubmit}
                disabled={!isAnswered}
              >
                {t('quiz.submit')}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
              >
                {t('quiz.next')}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Question Navigator */}
      <div className="grid grid-cols-8 gap-2">
        {aptitudeQuestions.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => setCurrentQuestionIndex(idx)}
            className={`aspect-square rounded-md text-sm font-medium transition-colors ${
              idx === currentQuestionIndex
                ? 'bg-primary text-primary-foreground'
                : answers[q.id]
                ? 'bg-green-500 text-white'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
