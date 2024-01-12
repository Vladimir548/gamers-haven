'use client';

import UserAvatar from '@/app/profile/UserAvatar';
import ProfileLogout from '@/app/profile/profileLogout';
import UseCurrentUser from '@/app/hooks/useCurrentUser';
import { useEffect } from 'react';
import UseIsAuth from '@/app/hooks/useIsAuth';

export default function Profile() {
  const isAuth = UseIsAuth();

  const data = UseCurrentUser();

  useEffect(() => {}, [isAuth, data]);

  return (
    <div>
      <div className={'flex justify-center items-center flex-col'}>
        <div className="mb-3">
          <UserAvatar avatar={data?.avatar} />
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-2 items-center">
            <label className={'w-[90px]'}>Username</label>
            <input className={'rounded-md p-2 w-[300px]'} type="text" disabled value={data?.name} />
          </div>
          <div className="flex gap-2 items-center">
            <label className={'w-[90px]'}>Email</label>
            <input
              className={'rounded-md p-2 w-[300px]'}
              type="text"
              disabled
              value={data?.email}
            />
          </div>
        </div>
        <div className="mt-3">
          <ProfileLogout />
        </div>
      </div>
    </div>
  );
}
