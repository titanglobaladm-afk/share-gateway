import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const SignIn = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [rateLimitSeconds, setRateLimitSeconds] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (rateLimitSeconds > 0) {
      const timer = setInterval(() => {
        setRateLimitSeconds((prev) => {
          if (prev <= 1) {
            setErrorMessage('');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [rateLimitSeconds]);

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const redirectUrl = `${window.location.origin}/onboarding`;
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
        },
      });

      if (error) {
        // Check if it's a rate limit error
        if (error.message.includes('429') || error.message.toLowerCase().includes('rate limit')) {
          const match = error.message.match(/(\d+)\s*seconds?/i);
          const waitTime = match ? parseInt(match[1]) : 20;
          setRateLimitSeconds(waitTime);
          setErrorMessage(`Too many requests. Please wait ${waitTime} seconds before trying again.`);
        } else {
          setErrorMessage(error.message);
          toast.error(error.message);
        }
        throw error;
      }

      setSent(true);
      toast.success(t('auth.sent'));
    } catch (error: any) {
      // Error already handled above
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">{t('auth.sign_in')}</CardTitle>
          <CardDescription>
            Enter your email to receive a sign-in link
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {rateLimitSeconds > 0 && (
            <Alert variant="destructive">
              <AlertDescription>
                Too many requests. Please wait {rateLimitSeconds} second{rateLimitSeconds !== 1 ? 's' : ''} before trying again.
              </AlertDescription>
            </Alert>
          )}
          
          {sent ? (
            <Alert>
              <AlertDescription>
                <div className="space-y-2">
                  <p className="font-medium">{t('auth.sent')}</p>
                  <p className="text-sm text-muted-foreground">
                    Check your email and click the link to sign in. You can close this page.
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleMagicLink} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading || rateLimitSeconds > 0}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading || rateLimitSeconds > 0}
              >
                {loading ? 'Sending...' : rateLimitSeconds > 0 ? `Wait ${rateLimitSeconds}s` : t('auth.continue')}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
