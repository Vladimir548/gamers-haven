'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';

interface IMenu {
  id: number;
  name: string;
  link: string;
  icons: IconType;
  iconsActive: IconType;
}
export default function SidebarMenu({
  id,
  name,
  link,
  icons: Icon,
  iconsActive: IconActive,
}: IMenu) {
  const pathname = usePathname();
  const isActive = pathname === link;
  const isActiveStarts = pathname.startsWith(link);
  return (
    <div>
      <Link
        key={id}
        className={` text-white flex items-center my-1  p-2 ${
          isActive ? 'bg-blue-700/70' : 'bg-violet-800/70'
        }  backdrop-blur rounded-lg  ease-in-out duration-300  w-full hover:bg-violet-950/70 `}
        href={link}
      >
        <span className={'pr-2 '}>{isActive ? <IconActive size={24} /> : <Icon size={24} />}</span>
        <h3 className={' text-xl'}>{name}</h3>
      </Link>
    </div>
  );
}
