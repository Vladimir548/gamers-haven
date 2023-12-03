'use client';

import { IRoutesBottomMenu } from '@/app/data/data-routes-navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavigationBottomMenu({
  id,
  name,
  link,
  icons: Icon,
  iconsActive: IconActive,
}: IRoutesBottomMenu) {
  const pathname = usePathname();
  const isActive = pathname === link;
  const isActiveStarts = pathname.startsWith(link);
  return (
    <div className={'flex flex-1 items-center justify-center'}>
      <Link
        key={id}
        className={` text-white flex flex-col h-full flex-1 items-center   ${
          isActive ? 'text-violet-600' : ''
        }  backdrop-blur   ease-in-out duration-300  w-full hover:bg-violet-950/70 `}
        href={link}
      >
        <span className={' flex flex-1 items-center'}>
          {isActive ? <IconActive size={18} /> : <Icon size={18} />}
        </span>
        <h3 className={' text-sm'}>{name}</h3>
      </Link>
    </div>
  );
}
