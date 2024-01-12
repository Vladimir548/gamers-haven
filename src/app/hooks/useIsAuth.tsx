'use client';

import { useRouter } from 'next/navigation';
import { getAccessToken } from '@/services/auth/auth.helper';
import { useEffect } from 'react';

export default function UseIsAuth() {
  const accessToken = getAccessToken();
  const { push } = useRouter();
  useEffect(() => {
    if (!accessToken) {
      return push('/login');
    }
  }, [push]);
}
