import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DocumentViewer from '@/components/DocumentViewer';
import { format } from 'date-fns';

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
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);

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

  const handleDocumentSigned = () => {
    setSelectedDoc(null);
    fetchDocuments();
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
                <Button 
                  variant={doc.signed ? 'outline' : 'default'}
                  onClick={() => setSelectedDoc(doc)}
                  className="w-full"
                >
                  {t('documents.view_sign')}
                </Button>
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
      </div>
    </div>
  );
};

export default Documents;
