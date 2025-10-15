import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle2, Download, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DocumentViewer from '@/components/DocumentViewer';
import { format } from 'date-fns';
import { updateOnboardingStatus } from '@/lib/onboardingHelpers';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Document {
  id: string;
  document_type: string;
  title: string;
  content: string;
  signed: boolean;
  signed_at?: string;
}

const Documents = () => {
  const { user } = useAuth();
  const { t, language: locale } = useLanguage();
  const navigate = useNavigate();
  const { isAdmin } = useAdminCheck();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [documentToSend, setDocumentToSend] = useState<Document | null>(null);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [sending, setSending] = useState(false);

  const fetchDocuments = async () => {
    if (!user) return;

    const { data: templates } = await supabase
      .from('document_templates')
      .select('*')
      .eq('active', true)
      .order('document_type');

    const { data: signatures } = await supabase
      .from('user_document_signatures')
      .select('document_template_id, signed_at')
      .eq('user_id', user.id);

    const docs = templates?.map(t => ({
      id: t.id,
      document_type: t.document_type,
      title: locale === 'en' ? t.title_en : t.title_fr,
      content: locale === 'en' ? t.content_en : t.content_fr,
      signed: signatures?.some(s => s.document_template_id === t.id) || false,
      signed_at: signatures?.find(s => s.document_template_id === t.id)?.signed_at
    })) || [];

    setDocuments(docs);
    setLoading(false);
  };

  useEffect(() => {
    fetchDocuments();
  }, [user, locale]);

  const handleDocumentSigned = async () => {
    setSelectedDoc(null);
    await fetchDocuments();
    
    // Check if all documents are now signed
    if (user && documents.every(d => d.signed || d.id === selectedDoc?.id)) {
      const isComplete = await updateOnboardingStatus(user.id);
      if (isComplete) {
        toast.success(t('documents.onboarding_complete'));
        navigate('/dashboard');
      }
    }
  };

  const handleDownload = (doc: Document) => {
    // Create a new window with the document content
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Please allow popups to download documents');
      return;
    }

    // Write the document HTML
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${doc.title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
            }
            h1 {
              color: #333;
              margin-bottom: 20px;
            }
            .metadata {
              color: #666;
              font-size: 14px;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 2px solid #eee;
            }
            .content {
              white-space: pre-wrap;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          <h1>${doc.title}</h1>
          <div class="metadata">
            <p><strong>Document Type:</strong> ${doc.document_type}</p>
            ${doc.signed_at ? `<p><strong>Signed Date:</strong> ${format(new Date(doc.signed_at), 'MMMM d, yyyy')}</p>` : ''}
          </div>
          <div class="content">${doc.content}</div>
        </body>
      </html>
    `);
    printWindow.document.close();

    // Wait for content to load, then print
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  const openEmailDialog = (doc: Document) => {
    setDocumentToSend(doc);
    setEmailDialogOpen(true);
    setRecipientEmail('');
  };

  const handleSendEmail = async () => {
    if (!documentToSend || !recipientEmail) {
      toast.error('Please enter a recipient email address');
      return;
    }

    setSending(true);
    try {
      const { error } = await supabase.functions.invoke('send-document', {
        body: {
          recipientEmail,
          documentTitle: documentToSend.title,
          documentContent: documentToSend.content,
          documentType: documentToSend.document_type,
          signedAt: documentToSend.signed_at,
        },
      });

      if (error) throw error;

      toast.success(`Document sent to ${recipientEmail}`);
      setEmailDialogOpen(false);
      setRecipientEmail('');
      setDocumentToSend(null);
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast.error('Failed to send document. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('documents.title')}</h1>
          <p className="text-muted-foreground">{t('documents.subtitle')}</p>
        </div>

        {documents.every(d => d.signed) && (
          <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success" />
            <span className="font-semibold text-success">{t('documents.all_signed')}</span>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {documents.map(doc => (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                  </div>
                  <Badge className={doc.signed ? 'bg-success' : 'bg-warning'}>
                    {doc.signed ? t('documents.signed') : t('documents.pending')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {doc.signed && doc.signed_at && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {t('documents.signed_at')}: {format(new Date(doc.signed_at), 'MMM d, yyyy')}
                  </p>
                )}
                <div className="flex gap-2">
                  <Button 
                    variant={doc.signed ? 'outline' : 'default'}
                    onClick={() => setSelectedDoc(doc)}
                    className="flex-1"
                  >
                    {t('documents.view_sign')}
                  </Button>
                  {isAdmin && doc.signed && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDownload(doc)}
                        title="Download PDF"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => openEmailDialog(doc)}
                        title="Send to Employee"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedDoc && (
          <DocumentViewer 
            document={selectedDoc}
            onClose={() => setSelectedDoc(null)}
            onSigned={handleDocumentSigned}
          />
        )}

        <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send Document to Employee</DialogTitle>
              <DialogDescription>
                Enter the employee's email address to send them a copy of "{documentToSend?.title}"
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Employee Email</label>
                <Input
                  type="email"
                  placeholder="employee@example.com"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  disabled={sending}
                />
              </div>
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setEmailDialogOpen(false)}
                  disabled={sending}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendEmail}
                  disabled={sending || !recipientEmail}
                >
                  {sending ? 'Sending...' : 'Send Document'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Documents;
