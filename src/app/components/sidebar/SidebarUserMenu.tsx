'use client';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UseCurrentUser from '@/app/hooks/useCurrentUser';

interface IUserMenu {
  id: number;
  name: string;
  link: string;
  icons: IconType;
  iconsActive: IconType;
}
export default function SidebarUserMenu({
  id,
  name,
  link,
  icons: Icon,
  iconsActive: IconActive,
}: IUserMenu) {
  const pathname = usePathname();
  const isActive = pathname === link;
  const user = UseCurrentUser();

  return (
    <div
      className={`${
        isActive && 'border-l-2 border-[#b402f8]'
      } ease-in-out duration-100 hover:border-l-2 border-[#b402f8]`}
    >
      <Link
        key={id}
        className={` text-white flex items-center my-1  font-medium p-2 ${
          isActive && 'text-[#b402f8]'
        }   rounded-lg  ease-in-out duration-300  w-full `}
        href={user ? link : '/login'}
      >
        <span className={'pr-2 '}>{isActive ? <IconActive size={24} /> : <Icon size={24} />}</span>
        <h3 className={' text-xl'}>{name}</h3>
      </Link>
    </div>
  );
}
