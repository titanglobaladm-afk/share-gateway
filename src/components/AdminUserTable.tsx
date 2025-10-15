import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

interface UserProfile {
  user_id: string;
  full_name: string | null;
  locale: string | null;
  onboarding_completed: boolean;
  kyc_verified: boolean;
  created_at: string;
}

interface UserRole {
  user_id: string;
  role: string;
}

export const AdminUserTable = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [roles, setRoles] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [profilesRes, rolesRes] = await Promise.all([
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase.from('user_roles').select('*')
      ]);

      if (profilesRes.data) setProfiles(profilesRes.data);
      
      if (rolesRes.data) {
        const rolesMap: Record<string, string[]> = {};
        rolesRes.data.forEach((r: UserRole) => {
          if (!rolesMap[r.user_id]) rolesMap[r.user_id] = [];
          rolesMap[r.user_id].push(r.role);
        });
        setRoles(rolesMap);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Roles</TableHead>
            <TableHead>Locale</TableHead>
            <TableHead>Onboarding</TableHead>
            <TableHead>KYC</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profiles.map((profile) => (
            <TableRow key={profile.user_id}>
              <TableCell className="font-medium">{profile.full_name || 'N/A'}</TableCell>
              <TableCell>
                {roles[profile.user_id]?.map((role) => (
                  <Badge key={role} variant="secondary" className="mr-1">
                    {role}
                  </Badge>
                )) || <span className="text-muted-foreground">No roles</span>}
              </TableCell>
              <TableCell>{profile.locale}</TableCell>
              <TableCell>
                <Badge variant={profile.onboarding_completed ? 'default' : 'outline'}>
                  {profile.onboarding_completed ? 'Complete' : 'Incomplete'}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={profile.kyc_verified ? 'default' : 'outline'}>
                  {profile.kyc_verified ? 'Verified' : 'Pending'}
                </Badge>
              </TableCell>
              <TableCell>{new Date(profile.created_at).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
