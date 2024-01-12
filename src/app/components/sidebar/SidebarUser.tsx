import Link from 'next/link';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';
import UseCurrentUser from '@/app/hooks/useCurrentUser';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import BtnSignIn from '@/app/components/btn-signin/BtnSignIn';

export default function SidebarUser() {
  const data = UseCurrentUser();
  const pathname = usePathname();
  useEffect(() => {}, [data]);
  return (
    <div>
      <div className={' flex items-center text-white  '}>
        {data || pathname === '/login' ? (
          <Link className={' flex gap-x-2 w-full px-1 py-2 items-center'} href={'/profile'}>
            <div className={'w-[40px]'}>
              {data?.avatar ? (
                <Image
                  unoptimized
                  className={'rounded-full object-cover w-[40px] h-[40px] '}
                  src={`http://localhost:5000${data?.avatar}`}
                  alt={'user image'}
                  width={40}
                  height={40}
                />
              ) : (
                <div>
                  <FaRegUserCircle size={40} />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className={'text-[16px]'}>{data?.name}</p>
              {/*<span className={'text-[10px] whitespace-nowrap overflow-hidden text-ellipsis'}>*/}
              {/*  {data?.email}*/}
              {/*</span>*/}
            </div>
          </Link>
        ) : (
          <div className={'h-[56px] w-full flex justify-center items-center'}>
            <BtnSignIn />
          </div>
        )}
      </div>
    </div>
  );
}
