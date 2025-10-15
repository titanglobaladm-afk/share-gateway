import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, FileText, Download } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface SignatureRecord {
  id: string;
  user_name: string;
  user_email: string;
  document_title: string;
  document_type: string;
  document_content: string;
  signed_at: string;
  signature_data: any;
  ip_address: string;
}

export const AdminDocumentSignaturesTable = () => {
  const [signatures, setSignatures] = useState<SignatureRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSignatures();
  }, []);

  const fetchSignatures = async () => {
    try {
      const { data, error } = await supabase
        .from('user_document_signatures')
        .select(`
          id,
          signed_at,
          signature_data,
          ip_address,
          user_id,
          document_template_id
        `)
        .order('signed_at', { ascending: false });

      if (error) throw error;

      // Fetch related data
      const enrichedData = await Promise.all(
        (data || []).map(async (sig) => {
          const [profileRes, templateRes] = await Promise.all([
            supabase
              .from('profiles')
              .select('full_name')
              .eq('user_id', sig.user_id)
              .single(),
            supabase
              .from('document_templates')
              .select('title_en, document_type, content_en')
              .eq('id', sig.document_template_id)
              .single(),
          ]);

          // Get user email from auth.users via RPC or metadata
          const { data: userData } = await supabase.auth.admin.getUserById(sig.user_id);

          return {
            id: sig.id,
            user_name: profileRes.data?.full_name || 'Unknown',
            user_email: userData?.user?.email || 'N/A',
            document_title: templateRes.data?.title_en || 'Unknown',
            document_type: templateRes.data?.document_type || 'Unknown',
            document_content: templateRes.data?.content_en || '',
            signed_at: sig.signed_at,
            signature_data: sig.signature_data,
            ip_address: sig.ip_address || 'N/A',
          };
        })
      );

      setSignatures(enrichedData);
    } catch (error) {
      console.error('Error fetching signatures:', error);
      toast.error('Failed to fetch signed documents');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (sig: SignatureRecord) => {
    try {
      const signatureName = sig.signature_data?.name || 'N/A';
      const formattedDate = format(new Date(sig.signed_at), 'MMMM d, yyyy \'at\' HH:mm:ss');
      
      // Escape HTML to prevent any issues
      const escapeHtml = (text: string) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
      };
      
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline';">
  <title>${escapeHtml(sig.document_title)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      color: #333;
      background: #ffffff;
    }
    .header {
      border-bottom: 3px solid #2563eb;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    h1 {
      margin: 0;
      color: #1e293b;
      font-size: 28px;
      font-weight: 600;
    }
    .document-type {
      display: inline-block;
      background: #eff6ff;
      color: #2563eb;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 14px;
      margin-top: 10px;
      font-weight: 500;
    }
    .offline-notice {
      background: #f0fdf4;
      border: 1px solid #86efac;
      color: #166534;
      padding: 12px 16px;
      border-radius: 6px;
      margin-bottom: 24px;
      font-size: 14px;
    }
    .content {
      margin: 30px 0;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .signature-section {
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      padding: 24px;
      margin-top: 40px;
    }
    .signature-section h2 {
      margin: 0 0 16px 0;
      color: #0f172a;
      font-size: 20px;
      font-weight: 600;
    }
    .signature-details {
      display: grid;
      gap: 12px;
    }
    .signature-item {
      display: flex;
      gap: 8px;
    }
    .signature-label {
      font-weight: 600;
      color: #475569;
      min-width: 140px;
    }
    .signature-value {
      color: #1e293b;
    }
    @media print {
      body { padding: 20px; }
      .offline-notice { display: none; }
    }
  </style>
</head>
<body>
  <div class="offline-notice">
    ✓ This is an offline document - No internet connection required
  </div>
  
  <div class="header">
    <h1>${escapeHtml(sig.document_title)}</h1>
    <span class="document-type">${escapeHtml(sig.document_type)}</span>
  </div>
  
  <div class="content">${sig.document_content}</div>
  
  <div class="signature-section">
    <h2>Signature Verification</h2>
    <div class="signature-details">
      <div class="signature-item">
        <span class="signature-label">Signed by:</span>
        <span class="signature-value">${escapeHtml(sig.user_name)} (${escapeHtml(sig.user_email)})</span>
      </div>
      <div class="signature-item">
        <span class="signature-label">Signature name:</span>
        <span class="signature-value">${escapeHtml(signatureName)}</span>
      </div>
      <div class="signature-item">
        <span class="signature-label">Date &amp; Time:</span>
        <span class="signature-value">${escapeHtml(formattedDate)}</span>
      </div>
      <div class="signature-item">
        <span class="signature-label">IP Address:</span>
        <span class="signature-value">${escapeHtml(sig.ip_address)}</span>
      </div>
      <div class="signature-item">
        <span class="signature-label">Document ID:</span>
        <span class="signature-value">${escapeHtml(sig.id)}</span>
      </div>
    </div>
  </div>
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const fileName = `${sig.document_type.replace(/\s+/g, '_')}-${sig.user_name.replace(/\s+/g, '_')}-${format(new Date(sig.signed_at), 'yyyy-MM-dd')}.html`;
      
      link.href = url;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
      
      toast.success('Document downloaded successfully');
    } catch (error) {
      console.error('Error downloading document:', error);
      toast.error('Failed to download document');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (signatures.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p>No signed documents found</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Document</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Signed At</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {signatures.map((sig) => (
            <TableRow key={sig.id}>
              <TableCell className="font-medium">{sig.user_name}</TableCell>
              <TableCell>{sig.user_email}</TableCell>
              <TableCell>{sig.document_title}</TableCell>
              <TableCell>
                <Badge variant="outline">{sig.document_type}</Badge>
              </TableCell>
              <TableCell>
                {format(new Date(sig.signed_at), 'MMM d, yyyy HH:mm')}
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {sig.ip_address}
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDownload(sig)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
