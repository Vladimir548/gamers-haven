'use client';

import Link from 'next/link';
import cn from 'classnames';
import style from './style.module.scss';
export default function BtnSignIn() {
  return (
    <div>
      <Link
        className={cn(' w-[200px] h-[40px] rounded-lg flex justify-center items-center', style.btn)}
        href={'/login'}
      >
        Sign in
      </Link>
    </div>
  );
}
