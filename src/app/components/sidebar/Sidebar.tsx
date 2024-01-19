'use client';
import SidebarMenu from '@/app/components/sidebar/SidebarMenu';
import cn from 'classnames';
import style from './style.module.scss';
import { ROUTES } from '@/app/data/data-routes';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/app/redux/slice/sidebar-slice';
import { ROUTESPRIVATE } from '@/app/data/data-private-routes';
import SidebarUserMenu from '@/app/components/sidebar/SidebarUserMenu';
import ProfileAvatarPage from '@/app/components/profile-avatar/page';
import SidebarUser from '@/app/components/sidebar/SidebarUser';
import UseCurrentUser from '@/app/hooks/useCurrentUser';
import BtnSignIn from '@/app/components/btn-signin/BtnSignIn';
import BtnSignUp from '@/app/components/btn-signup/BtnSignUp';

export default function Sidebar() {
  const user = UseCurrentUser();
  useEffect(() => {}, [user]);
  return (
    <div className={'relative'}>
      <div
        className={cn(
          ` ease-in-out duration-300 bg-primary  fixed flex flex-col z-50   w-[215px]    left-0 top-0 h-full     `,
          style.bg,
        )}
      >
        <div className="h-[60px] p-1">
          <h2 className={'name'}>GamersHaven</h2>
        </div>
        <div className={cn('px-1 overflow-y-auto relative z-50 max-h-[60%]', style.sidebar_scroll)}>
          {ROUTES.map((route) => (
            <SidebarMenu key={route.id} {...route} />
          ))}
        </div>
        <div
          className={cn(
            'border-t-1 overflow-y-auto relative z-50 border-white/30 px-1  flex-1',
            style.sidebar_scroll,
          )}
        >
          {ROUTESPRIVATE.map((route) => (
            <SidebarUserMenu key={route.id} {...route} />
          ))}
        </div>
        {user ? (
          <div className=" border-t-1  border-white/30 relative z-50 h-[60px]  rounded-b-lg duration-300 ease-in-out overflow-hidden hover:bg-gray-700">
            <SidebarUser />
          </div>
        ) : (
          <div
            className={
              'h-[60px] border-t-1   border-white/30 flex justify-between p-1 relative z-50 '
            }
          >
            <div className="w-full flex justify-center items-center">
              <BtnSignIn />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
