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
import { Loader2, FileText } from 'lucide-react';
import { format } from 'date-fns';

interface SignatureRecord {
  id: string;
  user_name: string;
  user_email: string;
  document_title: string;
  document_type: string;
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
              .select('title_en, document_type')
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
            signed_at: sig.signed_at,
            signature_data: sig.signature_data,
            ip_address: sig.ip_address || 'N/A',
          };
        })
      );

      setSignatures(enrichedData);
    } catch (error) {
      console.error('Error fetching signatures:', error);
    } finally {
      setLoading(false);
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
