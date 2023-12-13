'use client';
import { useScroll, motion, useTransform } from 'framer-motion';
import HeaderNav from '@/app/components/header/HeaderNav';
import HeaderSearch from '@/app/components/header/header-search/HeaderSearch';

import { useState } from 'react';
import MenuBurger from '@/app/components/menu-burger/MenuBurger';

export default function Header() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 100], ['#041542', 'rgba(4,21,66,0.8)']);
  const backdropFilter = useTransform(scrollY, [0, 100], ['blur(3)', 'blur(8px)']);
  const position = useTransform(scrollY, [0, 100], ['relative', 'fixed']);
  const marginBottom = useTransform(scrollY, [0, 100], ['0px', '0px']);

  return (
    <div className={'h-[60px] w-full hidden md:block'}>
      <motion.div
        style={{ position, background, backdropFilter, marginBottom }}
        className={` z-[999] left-0 top-0 flex items-center   ease-in-out duration-300   w-full h-[60px]  px-1 `}
      >
        <div className=" w-[300px] flex items-center gap-x-2  border-white/30 ">
          <div className="hidden md:block">
            <MenuBurger />
          </div>
          <h2 className={'name'}>GamersHaven</h2>
        </div>

        <div className="hidden md:block">
          <HeaderNav />
        </div>
        <div className=" justify-center  flex-1 hidden md:flex">
          <HeaderSearch />
        </div>
        <div className="hidden md:block">users</div>
      </motion.div>
    </div>
  );
}
