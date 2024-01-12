'use client';

import Link from 'next/link';

export default function BtnSignUp() {
  return (
    <div>
      <Link
        className={
          'py-2 w-[100px] h-[50px] rounded-lg flex justify-center items-center px-4 bg-violet-400'
        }
        href={'/login'}
      >
        Sign up
      </Link>
    </div>
  );
}
