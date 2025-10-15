-- Add admin access to view all signed legal documents
CREATE POLICY "Admins can view all signed documents"
ON public.user_document_signatures
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));