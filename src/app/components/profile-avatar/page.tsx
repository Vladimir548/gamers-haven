'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';

import UseCurrentUser from '@/app/hooks/useCurrentUser';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ProfileAvatarPage() {
  const data = UseCurrentUser();
  const pathname = usePathname();
  useEffect(() => {}, [data]);
  return (
    <div className={' flex items-center text-white gap-x-3'}>
      {data || pathname === '/login' ? (
        <Link className={' flex items-center'} href={'/profile'}>
          {data?.avatar ? (
            <Image
              unoptimized
              className={'rounded-full object-cover w-[40px] h-[40px] '}
              src={`http://localhost:5000${data?.avatar}`}
              alt={'user image'}
              width={40}
              height={40}
            />
          ) : (
            <div>
              <FaRegUserCircle size={40} />
            </div>
          )}

          <p className={'text-[16px]'}>{data?.name}</p>
        </Link>
      ) : (
        <Link href={'/login'}>Login</Link>
      )}
    </div>
  );
}
