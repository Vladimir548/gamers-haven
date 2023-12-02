'use client';

import style from './style.module.scss';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/app/redux/slice/sidebar-slice';

export default function MenuBurger() {
  const { isActive } = useTypedSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleSidebar())}
      className={`${style.menu_burger}  ${isActive ? style._active : ''}`}
    >
      <span></span>
    </div>
  );
}
