-- Add KYC columns to profiles table
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS kyc_verified BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS kyc_data JSONB,
ADD COLUMN IF NOT EXISTS kyc_completed_at TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.kyc_verified IS 'Investor KYC verification status';
COMMENT ON COLUMN public.profiles.kyc_data IS 'Stores KYC form data (name, DOB, country, accreditation, PEP status)';
COMMENT ON COLUMN public.profiles.kyc_completed_at IS 'Timestamp when KYC was completed';

-- Insert placeholder legal documents (simple INSERT, check for duplicates separately)
INSERT INTO public.document_templates (
  document_type,
  title_en, title_fr,
  content_en, content_fr,
  requires_signature,
  active,
  version
)
SELECT 'employment_contract', 'Employment Agreement', 'Contrat de travail',
  '<h1>Employment Agreement</h1><p><strong>Effective Date:</strong> To be determined</p><h2>1. Position and Responsibilities</h2><p>This is a placeholder. Replace with actual legal content via database.</p><h2>2. Compensation</h2><p>Details to be added.</p><h2>3. Termination</h2><p>30 days written notice required.</p>',
  '<h1>Contrat de travail</h1><p><strong>Date d''effet :</strong> À déterminer</p><h2>1. Poste et responsabilités</h2><p>Ceci est un placeholder. Remplacer par le contenu juridique réel via la base de données.</p><h2>2. Rémunération</h2><p>Détails à ajouter.</p><h2>3. Résiliation</h2><p>Préavis de 30 jours requis.</p>',
  true, true, '1.0'
WHERE NOT EXISTS (SELECT 1 FROM public.document_templates WHERE document_type = 'employment_contract')
UNION ALL
SELECT 'code_of_conduct', 'Code of Conduct', 'Code de conduite',
  '<h1>Code of Conduct</h1><p>All SHARE staff must adhere to the following principles:</p><ul><li>Respect for patients and colleagues</li><li>Professional integrity</li><li>Confidentiality</li></ul><p><em>Placeholder content. Replace with actual policy.</em></p>',
  '<h1>Code de conduite</h1><p>Tout le personnel SHARE doit respecter les principes suivants :</p><ul><li>Respect des patients et collègues</li><li>Intégrité professionnelle</li><li>Confidentialité</li></ul><p><em>Contenu temporaire. Remplacer par la politique réelle.</em></p>',
  true, true, '1.0'
WHERE NOT EXISTS (SELECT 1 FROM public.document_templates WHERE document_type = 'code_of_conduct')
UNION ALL
SELECT 'confidentiality', 'Confidentiality Agreement', 'Accord de confidentialité',
  '<h1>Confidentiality Agreement</h1><p>You agree to maintain strict confidentiality of all patient data, organizational strategies, and proprietary information.</p><p><strong>Penalties for breach:</strong> Immediate termination and legal action.</p><p><em>Placeholder. Replace with full legal text.</em></p>',
  '<h1>Accord de confidentialité</h1><p>Vous acceptez de maintenir une confidentialité stricte de toutes les données des patients, stratégies organisationnelles et informations propriétaires.</p><p><strong>Sanctions en cas de violation :</strong> Résiliation immédiate et action en justice.</p><p><em>Placeholder. Remplacer par le texte juridique complet.</em></p>',
  true, true, '1.0'
WHERE NOT EXISTS (SELECT 1 FROM public.document_templates WHERE document_type = 'confidentiality')
UNION ALL
SELECT 'data_protection', 'Data Protection Policy', 'Politique de protection des données',
  '<h1>Data Protection Policy</h1><p>SHARE complies with international data protection standards including GDPR principles.</p><h2>Your Rights</h2><ul><li>Right to access your data</li><li>Right to correction</li><li>Right to deletion</li></ul><p><em>Placeholder. Replace with full policy text.</em></p>',
  '<h1>Politique de protection des données</h1><p>SHARE se conforme aux normes internationales de protection des données, y compris les principes du RGPD.</p><h2>Vos droits</h2><ul><li>Droit d''accès à vos données</li><li>Droit de rectification</li><li>Droit de suppression</li></ul><p><em>Placeholder. Remplacer par le texte complet de la politique.</em></p>',
  true, true, '1.0'
WHERE NOT EXISTS (SELECT 1 FROM public.document_templates WHERE document_type = 'data_protection');