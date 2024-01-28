'use client';
import SidebarMenu from '@/app/components/sidebar/SidebarMenu';
import cn from 'classnames';
import style from './style.module.scss';
import { useEffect } from 'react';
import SidebarUserMenu from '@/app/components/sidebar/SidebarUserMenu';
import SidebarUser from '@/app/components/sidebar/SidebarUser';
import UseCurrentUser from '@/app/hooks/useCurrentUser';
import BtnSignIn from '@/app/components/btn-signin/BtnSignIn';
import { ROUTES } from '@/data/data-routes';
import { ROUTESPRIVATE } from '@/data/data-private-routes';

export default function Sidebar() {
  const user = UseCurrentUser();
  useEffect(() => {}, [user]);
  return (
    <div className={'relative '}>
      <div
        className={cn(
          ` ease-in-out duration-300 bg-primary  fixed flex flex-col z-50   w-[215px]    left-0 top-0 h-full     `,
          style.bg,
        )}
      >
        <div className="h-[60px] p-1">
          <h2 className={'name'}>GamersHaven</h2>
        </div>
        <div className="overflow-y-auto scroll">
          <div className={cn('px-1  relative z-50 ', style.sidebar_scroll)}>
            {ROUTES.map((route) => (
              <SidebarMenu key={route.id} {...route} />
            ))}
          </div>
          <div
            className={cn(
              'border-t-[1px]   relative z-50 border-white/30 px-1  flex-1',
              style.sidebar_scroll,
            )}
          >
            {ROUTESPRIVATE.map((route) => (
              <SidebarUserMenu key={route.id} {...route} />
            ))}
          </div>
        </div>
        {user ? (
          <div className=" border-t-[1px]  border-white/30 relative z-50 h-[60px]  rounded-b-lg duration-300 ease-in-out overflow-hidden hover:bg-gray-700">
            <SidebarUser />
          </div>
        ) : (
          <div
            className={
              'h-[60px] border-t-[1px]   border-white/30 flex justify-between p-1 relative z-50 '
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
