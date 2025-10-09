export type AppRole = 'investor' | 'doctor' | 'nurse' | 'driver' | 'manager' | 'security';

export const roleToCoursesMap: Record<AppRole, string[]> = {
  investor: ['orientation_common'],
  doctor: ['orientation_common', 'doctor_track'],
  nurse: ['orientation_common', 'nurse_track'],
  driver: ['orientation_common', 'driver_track'],
  manager: ['orientation_common', 'manager_track'],
  security: ['orientation_common', 'security_track'],
};

// Map roles to their specific aptitude test quiz IDs
export const roleToAptitudeTestMap: Record<AppRole, string | null> = {
  investor: null, // No role-specific test needed
  doctor: 'aptitude_test_doctor',
  nurse: 'aptitude_test_nurse',
  driver: 'aptitude_test_driver',
  manager: 'aptitude_test_manager',
  security: 'aptitude_test_security',
};
