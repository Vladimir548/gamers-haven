'use client';
import SidebarMenu from '@/app/components/sidebar/SidebarMenu';
import cn from 'classnames';
import style from './style.module.scss';
import { ROUTES } from '@/app/data/data-routes';
import { useState } from 'react';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/app/redux/slice/sidebar-slice';

export default function Sidebar() {
  const { isActive } = useTypedSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const activeSidebar = isActive ? 'left-0' : '-left-full ';
  return (
    <div>
      <div
        onClick={() => dispatch(toggleSidebar())}
        className={`${style.menu_burger}  ${isActive ? style._active : ''}`}
      >
        <span></span>
      </div>
      <div
        onClick={() => dispatch(toggleSidebar())}
        className={` ${isActive ? 'backdrop' : ''}     `}
      >
        <div
          className={` ${activeSidebar} ease-in-out duration-300  absolute bg-[#030c36] px-2   top-[60px] h-[100vh]   rounded-br-lg `}
        >
          <div className="">
            {ROUTES.map((route) => (
              <SidebarMenu key={route.id} {...route} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
