export type AppRole = 'investor' | 'doctor' | 'nurse' | 'driver' | 'manager' | 'security';

export const roleToCoursesMap: Record<AppRole, string[]> = {
  investor: ['orientation_common'],
  doctor: ['orientation_common', 'doctor_track'],
  nurse: ['orientation_common', 'nurse_track'],
  driver: ['orientation_common', 'driver_track'],
  manager: ['orientation_common', 'manager_track'],
  security: ['orientation_common', 'security_track'],
};
