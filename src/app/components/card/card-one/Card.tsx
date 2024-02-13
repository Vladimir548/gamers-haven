'use client';

import ImageCustom from '@/app/components/image/Image';
import { CiStar } from 'react-icons/ci';
import Link from 'next/link';
import { GenresResponse } from '@/interface/interface-genres';
import cn from 'classnames';
import style from './style.module.scss';
import { Games, GamesResponse } from '@/interface/games/interface-games';
import { InfiniteData } from '@tanstack/react-query';
import React from 'react';
interface ICard {
  data: InfiniteData<{ data: GamesResponse; nextOffset: number }> | undefined;
  isPending: boolean;
}
export default function Card({ data, isPending }: ICard) {
  return (
    <div className={style.container}>
      <>
        {data?.pages?.map((data) =>
          data.data.map((game) => (
            <div key={game.id} className={'flex min-w-full rounded-lg '}>
              <div className={'flex relative w-full  '}>
                <Link
                  href={`/game/${game.id}`}
                  className="flex flex-col p-1 w-full items-stretch bg-primary rounded-md shadow-[0_0_4px_0_rgb(68,68,68)] ease-linear duration-300 overflow-hidden hover:bg-dark-violet"
                >
                  {/*<div className="absolute  left-0 top-0 w-full h-full blur-[10px]">*/}
                  {/*  <ImageCustom*/}
                  {/*    image_id={game.cover?.image_id}*/}
                  {/*    size={'micro'}*/}
                  {/*    ratio={1 / 1.3}*/}
                  {/*    quality={1}*/}
                  {/*  />*/}
                  {/*</div>*/}

                  <div className="w-[inherit]   ">
                    <ImageCustom
                      image_id={game?.cover?.image_id}
                      size={'cover_big'}
                      ratio={3 / 4}
                      quality={100}
                      styleName={'rounded-lg object-cover '}
                    />
                  </div>
                  <div className=" p-1 flex w-full relative z-10 flex-col h-full">
                    <div className="flex-wrap flex flex-1 ">
                      <h2 className={cn('overflow_line_two min-w-full', style.title)}>
                        {' '}
                        {game.name}
                      </h2>
                    </div>

                    <div
                      className={cn(
                        'flex justify-between text-default-100 text-sm items-center gap-x-2 border-t-1 border-white/30 ',
                        style.info,
                      )}
                    >
                      <div>
                        {game.genres ? (
                          <span className={'overflow_line_one'}>{game.genres[0].name}</span>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="flex items-center gap-x-1">
                        <span>
                          <CiStar size={18} />
                        </span>
                        <span>{Number(game.rating).toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )),
        )}
      </>
    </div>
  );
}
