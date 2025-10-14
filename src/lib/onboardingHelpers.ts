import { supabase } from '@/integrations/supabase/client';
import { AppRole } from '@/data/roleCoursesMap';

export async function checkOnboardingCompletion(userId: string): Promise<boolean> {
  // Fetch all relevant data
  const [profileRes, roleRes, testRes, coursesRes, docsRes, templatesRes] = await Promise.all([
    supabase.from('profiles').select('kyc_verified').eq('user_id', userId).single(),
    supabase.from('user_roles').select('role').eq('user_id', userId).single(),
    supabase.from('aptitude_test_attempts').select('passed').eq('user_id', userId).eq('passed', true).maybeSingle(),
    supabase.from('user_courses').select('completed_at').eq('user_id', userId),
    supabase.from('user_document_signatures').select('id').eq('user_id', userId),
    supabase.from('document_templates').select('id').eq('active', true)
  ]);

  const profile = profileRes.data;
  const role = roleRes.data?.role as AppRole;
  const hasPassedTest = !!testRes.data;
  const allCoursesComplete = coursesRes.data?.every(c => c.completed_at !== null) || false;
  const allDocsSigned = docsRes.data?.length === templatesRes.data?.length;

  // Completion criteria
  const profileComplete = true; // If we're here, profile exists
  const roleSelected = !!role;
  const testOrKycComplete = 
    role === 'investor' 
      ? profile?.kyc_verified === true 
      : hasPassedTest;

  const isComplete = 
    profileComplete &&
    roleSelected &&
    testOrKycComplete &&
    allCoursesComplete &&
    allDocsSigned;

  return isComplete;
}

export async function updateOnboardingStatus(userId: string) {
  const isComplete = await checkOnboardingCompletion(userId);
  
  if (isComplete) {
    await supabase
      .from('profiles')
      .update({ onboarding_completed: true })
      .eq('user_id', userId);
  }
  
  return isComplete;
}
