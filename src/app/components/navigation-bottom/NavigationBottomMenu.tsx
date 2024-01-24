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
  // console.log(' link ' + link);
  // console.log(pathname);
  return (
    <div className={'flex flex-1 items-center justify-center'}>
      <Link
        key={id}
        className={` text-white flex flex-col h-full flex-1 items-center   ${
          isActive ? 'text-dark-violet' : 'text-white'
        }  backdrop-blur   ease-in-out duration-300  w-full  `}
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
