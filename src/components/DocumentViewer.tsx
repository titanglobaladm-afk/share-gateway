import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { updateOnboardingStatus } from '@/lib/onboardingHelpers';

interface DocumentViewerProps {
  document: {
    id: string;
    title: string;
    content: string;
    signed: boolean;
  };
  onClose: () => void;
  onSigned: () => void;
}

const DocumentViewer = ({ document, onClose, onSigned }: DocumentViewerProps) => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [agreed, setAgreed] = useState(false);
  const [signatureName, setSignatureName] = useState('');
  const [signing, setSigning] = useState(false);

  const handleSign = async () => {
    if (!user || !agreed || !signatureName.trim()) return;

    setSigning(true);

    try {
      let ipAddress = 'unknown';
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();
        ipAddress = ip;
      } catch (e) {
        console.log('Could not fetch IP');
      }

      const { error } = await supabase
        .from('user_document_signatures')
        .insert({
          user_id: user.id,
          document_template_id: document.id,
          signature_data: {
            name: signatureName,
            timestamp: new Date().toISOString(),
            ip_address: ipAddress
          },
          signed_at: new Date().toISOString(),
          ip_address: ipAddress
        });

      if (error) throw error;

      toast.success(t('documents.signed_success'));
      
      // Check if onboarding is now complete
      await updateOnboardingStatus(user.id);
      
      onSigned();
      
    } catch (error) {
      console.error('Signature error:', error);
      toast.error(t('documents.error'));
    } finally {
      setSigning(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle>{document.title}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 border rounded p-4">
          <div dangerouslySetInnerHTML={{ __html: document.content }} />
        </ScrollArea>

        {!document.signed && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <Label htmlFor="agree" className="text-sm">
                {t('documents.agree')}
              </Label>
            </div>

            <div>
              <Label htmlFor="signature">{t('documents.signature')}</Label>
              <Input 
                id="signature"
                value={signatureName}
                onChange={(e) => setSignatureName(e.target.value)}
                placeholder={t('documents.signature_placeholder')}
                disabled={!agreed}
              />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                {t('documents.cancel')}
              </Button>
              <Button 
                onClick={handleSign}
                disabled={!agreed || !signatureName.trim() || signing}
              >
                {signing ? t('documents.signing') : t('documents.sign_button')}
              </Button>
            </div>
          </div>
        )}

        {document.signed && (
          <div className="border-t pt-4">
            <p className="text-sm text-success font-semibold">
              ✓ {t('documents.already_signed')}
            </p>
            <Button variant="outline" onClick={onClose} className="mt-2">
              {t('documents.close')}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DocumentViewer;
