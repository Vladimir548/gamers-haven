'use client';

import { useEffect, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import cn from 'classnames';
import style from './style.module.scss';
import { GamesResponse } from '@/interface/games/interface-games';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import Link from 'next/link';
interface IDropdown {
  value: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: GamesResponse;
}
export default function HeaderDropdown({ value, isOpen, setIsOpen, data }: IDropdown) {
  const { data: dataPopular, isLoading } = useQuery({
    queryKey: ['dropdown-popular'],
    queryFn: () => QueryHome.getSwiper(),
  });
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    setIsOpen(false);
  });
  useEffect(() => {
    if (isOpen) {
      return setIsOpen(true);
    } else if (value.length === 0) {
      setIsOpen(false);
    } else {
      return setIsOpen(false);
    }
  }, [value, isOpen]);
  const stylesVisible = isOpen
    ? 'rounded-lg  bg-violet-700/60 visible  w-full h-[300px]'
    : ' w-full h-[0px] invisible';
  return (
    <>
      <div
        className={cn(
          `absolute mt-1 left-0 top-full overflow-x-hidden backdrop-blur   z-50 ${stylesVisible}`,
          style.text_invisible,
        )}
      >
        <ul className={style.list}>
          {value.length >= 2 ? (
            <div>
              {data?.map((game) => (
                <Link key={game.id} href={`/game/${game.id}`}>
                  <li
                    className={
                      'bg-violet-700 cursor-pointer shadow-lg p-2 border-b-2 border-white/50  hover:bg-violet-900'
                    }
                  >
                    {game.name}
                  </li>
                </Link>
              ))}
            </div>
          ) : (
            <div>
              {dataPopular?.map((game) => (
                <li
                  key={game.id}
                  className={
                    'bg-violet-700 cursor-pointer shadow-lg p-2 border-b-2 border-white/50  hover:bg-violet-900'
                  }
                >
                  {game.name}
                </li>
              ))}
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
