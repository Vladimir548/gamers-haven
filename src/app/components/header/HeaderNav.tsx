'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import MenuBurger from '@/app/components/menu-burger/MenuBurger';
import HeaderSearch from '@/app/components/header/header-search/HeaderSearch';
import ProfileAvatarPage from '@/app/components/profile-avatar/page';
import Link from 'next/link';

export default function HeaderNav() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 100], ['#0e1820', 'rgba(14,24,32,0.8)']);
  const backdropFilter = useTransform(scrollY, [0, 100], ['blur(3)', 'blur(8px)']);
  const position = useTransform(scrollY, [0, 100], ['relative', 'fixed']);
  const marginBottom = useTransform(scrollY, [0, 100], ['0px', '0px']);
  return (
    <motion.div
      style={{ position, background, backdropFilter, marginBottom }}
      className={` z-[999] left-0 top-0 flex items-center  shadow-[0_0_4px_0_rgba(255,255,255,0.2)]   ease-in-out duration-300   w-full h-[60px]  px-1 `}
    >
      <div className=" w-[300px] flex items-center gap-x-2  border-white/30 ">
        {/*<div className="hidden md:block">*/}
        {/*  <MenuBurger />*/}
        {/*</div>*/}
        <h2 className={'name'}>GamersHaven</h2>
      </div>

      <div className=" justify-center  flex-1 hidden md:flex">
        <HeaderSearch />
      </div>
      <div className="hidden md:block">
        {/*<Link href={'/login'}>*/}
        {/*  <button*/}
        {/*    className={*/}
        {/*      'border-1 border-blue-600  py-3 px-5 rounded-md ease-in-out duration-300 hover:bg-blue-600 '*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Login*/}
        {/*  </button>*/}
        {/*</Link>*/}

        {/*<ProfileAvatarPage />*/}
      </div>
    </motion.div>
  );
}
