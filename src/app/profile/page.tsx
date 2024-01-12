import type { Metadata } from 'next';
import Profile from '@/app/profile/Profile';

export const metadata: Metadata = {
  title: 'Profile',
};
export default function ProfilePage() {
  return <Profile />;
}
