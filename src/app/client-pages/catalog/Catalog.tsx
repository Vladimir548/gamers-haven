'use client';

import Link from 'next/link';
import { ROUTESCATALOG } from '@/data/data-catalog';
import style from './style.module.scss';
import cn from 'classnames';
export default function Catalog() {
  return (
    <div className={'flex gap-3 flex-wrap justify-center'}>
      {ROUTESCATALOG.map((route) => (
        <Link
          className={cn(
            'w-[125px] flex justify-center items-center h-[70px] rounded-lg bg-black/50 backdrop-blur-lg ',
            style.category,
          )}
          key={route.id}
          href={route.link}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}
