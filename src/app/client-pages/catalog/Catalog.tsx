'use client';

import { ROUTESCATALOG } from '@/app/data/data-catalog';
import Link from 'next/link';

export default function Catalog() {
  return (
    <div className={'flex gap-3 flex-wrap justify-center'}>
      {ROUTESCATALOG.map((route) => (
        <Link
          className={
            'w-[125px] flex justify-center items-center h-[70px] rounded-lg bg-dark-violet/60 backdrop-blur-lg '
          }
          key={route.id}
          href={route.link}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}