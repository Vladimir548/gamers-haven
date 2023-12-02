'use client';

import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function HeaderNav() {
  const router = useRouter();
  return (
    <div className={'flex gap-x-2 items-center  '}>
      <span
        className={
          'p-1 rounded-full bg-slate-800 ease-in-out cursor-pointer duration-300 hover:bg-slate-600'
        }
        onClick={() => router.back()}
      >
        <MdOutlineKeyboardArrowLeft size={22} />
      </span>
      <span
        className={
          'p-1 rounded-full bg-slate-800 ease-in-out cursor-pointer duration-300 hover:bg-slate-600'
        }
        onClick={() => router.forward()}
      >
        <MdOutlineKeyboardArrowRight size={22} />
      </span>
    </div>
  );
}
