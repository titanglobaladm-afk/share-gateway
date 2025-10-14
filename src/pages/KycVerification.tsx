import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const KycVerification = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    country: '',
    accredited: '',
    pep: '',
  });
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          kyc_verified: true,
          kyc_data: formData,
          kyc_completed_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      toast.success(t('kyc.success'));
      navigate('/dashboard');
      
    } catch (error) {
      console.error('KYC error:', error);
      toast.error(t('kyc.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>{t('kyc.title')}</CardTitle>
          <p className="text-sm text-muted-foreground">{t('kyc.subtitle')}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">{t('kyc.full_name')}</Label>
              <Input 
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
            </div>

            <div>
              <Label htmlFor="dob">{t('kyc.dob')}</Label>
              <Input 
                id="dob"
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({...formData, dob: e.target.value})}
                required
              />
            </div>

            <div>
              <Label htmlFor="country">{t('kyc.country')}</Label>
              <Input 
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                required
              />
            </div>

            <div>
              <Label htmlFor="accredited">{t('kyc.accredited')}</Label>
              <Select 
                value={formData.accredited}
                onValueChange={(v) => setFormData({...formData, accredited: v})}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('kyc.select')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">{t('kyc.yes')}</SelectItem>
                  <SelectItem value="no">{t('kyc.no')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="pep">{t('kyc.pep')}</Label>
              <Select 
                value={formData.pep}
                onValueChange={(v) => setFormData({...formData, pep: v})}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('kyc.select')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">{t('kyc.no')}</SelectItem>
                  <SelectItem value="yes">{t('kyc.yes')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <Label htmlFor="agree" className="text-sm">
                {t('kyc.agree')}
              </Label>
            </div>

            <Button type="submit" className="w-full" disabled={!agreed || loading}>
              {loading ? t('kyc.submitting') : t('kyc.submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default KycVerification;
