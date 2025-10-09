-- Phase 1.1: Employment Documents Tables
CREATE TABLE document_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_type TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_fr TEXT NOT NULL,
  content_en TEXT NOT NULL,
  content_fr TEXT NOT NULL,
  requires_signature BOOLEAN DEFAULT true,
  version TEXT DEFAULT '1.0',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE user_document_signatures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  document_template_id UUID REFERENCES document_templates(id) NOT NULL,
  signed_at TIMESTAMPTZ DEFAULT now(),
  ip_address TEXT,
  signature_data JSONB,
  UNIQUE(user_id, document_template_id)
);

ALTER TABLE document_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_document_signatures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active document templates"
  ON document_templates FOR SELECT
  USING (active = true);

CREATE POLICY "Users can view their own signatures"
  ON user_document_signatures FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can sign documents"
  ON user_document_signatures FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Phase 1.2: Aptitude Test Tables
CREATE TABLE aptitude_test_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  started_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ,
  score INTEGER,
  passed BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE aptitude_test_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id UUID REFERENCES aptitude_test_attempts(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  answer TEXT NOT NULL,
  is_correct BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE ai_evaluations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  attempt_id UUID REFERENCES aptitude_test_attempts(id),
  evaluation_type TEXT NOT NULL,
  cognitive_score INTEGER,
  critical_thinking_score INTEGER,
  technical_score INTEGER,
  communication_score INTEGER,
  situational_score INTEGER,
  overall_score INTEGER,
  recommendation TEXT,
  ai_comments TEXT,
  raw_ai_response JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE aptitude_test_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE aptitude_test_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_evaluations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own test attempts"
  ON aptitude_test_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own test attempts"
  ON aptitude_test_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own test attempts"
  ON aptitude_test_attempts FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own test answers"
  ON aptitude_test_answers FOR SELECT
  USING (attempt_id IN (SELECT id FROM aptitude_test_attempts WHERE user_id = auth.uid()));

CREATE POLICY "Users can insert own test answers"
  ON aptitude_test_answers FOR INSERT
  WITH CHECK (attempt_id IN (SELECT id FROM aptitude_test_attempts WHERE user_id = auth.uid()));

CREATE POLICY "Users can view own evaluations"
  ON ai_evaluations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all evaluations"
  ON ai_evaluations FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

-- Phase 1.3: Enhance user_courses for Progress Tracking
ALTER TABLE user_courses ADD COLUMN IF NOT EXISTS progress_percentage INTEGER DEFAULT 0;
ALTER TABLE user_courses ADD COLUMN IF NOT EXISTS lessons_completed JSONB DEFAULT '[]'::jsonb;
ALTER TABLE user_courses ADD COLUMN IF NOT EXISTS quizzes_completed JSONB DEFAULT '[]'::jsonb;
ALTER TABLE user_courses ADD COLUMN IF NOT EXISTS last_accessed_at TIMESTAMPTZ;

-- Phase 1.4: Quiz Attempts Table
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  quiz_id TEXT NOT NULL,
  course_id TEXT NOT NULL,
  started_at TIMESTAMPTZ DEFAULT now(),
  submitted_at TIMESTAMPTZ,
  score INTEGER,
  passed BOOLEAN,
  answers JSONB,
  ai_evaluation_id UUID REFERENCES ai_evaluations(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz attempts"
  ON quiz_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own quiz attempts"
  ON quiz_attempts FOR UPDATE
  USING (auth.uid() = user_id);

-- Phase 1.5: Fix Existing RLS Issues
CREATE POLICY "Users can insert own roles"
  ON user_roles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own roles"
  ON user_roles FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own courses"
  ON user_courses FOR DELETE
  USING (auth.uid() = user_id);

-- Add trigger for updating updated_at on document_templates
CREATE TRIGGER update_document_templates_updated_at
  BEFORE UPDATE ON document_templates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();