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
    <div
      className={`${
        isActive && 'border-l-2  border-[#b402f8]'
      } ease-in-out duration-100 hover:border-l-2 border-[#b402f8]`}
    >
      <Link
        key={id}
        className={`  flex items-center my-1 font-medium   p-1 py-2  ${
          isActive ? 'text-[#b402f8] ' : 'text-white'
        }    ease-in-out duration-300  w-full  `}
        href={link}
      >
        <span className={'pr-2 '}>{isActive ? <IconActive size={24} /> : <Icon size={24} />}</span>
        <h3 className={' text-xl'}>{name}</h3>
      </Link>
    </div>
  );
}
