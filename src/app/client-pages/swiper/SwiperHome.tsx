import 'swiper/css';

import './styles.css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { QueryFunction, useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import Image from '@/app/components/image/Image';
import style from './style.module.scss';

import { GamesResponse } from '@/interface/games/interface-games';
import Link from 'next/link';
import cn from 'classnames';
export default function SwiperHome({ QueryFn }: { QueryFn: QueryFunction<GamesResponse> }) {
  const { data, isLoading } = useQuery({
    queryKey: ['swiper-home'],
    queryFn: QueryFn,
  });

  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.map((game) => (
          <SwiperSlide key={game.id} className={style.card_block}>
            <Link key={game.id} href={`/game/${game.id}`} className={'relative w-full h-full'}>
              <Image
                image_id={game.artworks && game.artworks[0].image_id}
                size={'720p'}
                styleName={'rounded-lg'}
                ratio={16 / 9}
                quality={100}
              />
              <div
                className={
                  'absolute left-0 bottom-0 w-full max-h-full  backdrop-blur-[50px] bg-primary/50 text-center  z-10  ease-in-out duration-1000  rounded-lg overflow-hidden  '
                }
              >
                <div className="flex justify-center w-full  items-end  px-3 py-2 h-full ">
                  <div className="flex flex-col gap-y-2">
                    <h2
                      className={
                        'flex text-white text-xl justify-center items-center text-center  font-bold'
                      }
                    >
                      {game.name}
                    </h2>
                    <div className={cn('flex flex-col', style.full_info)}>
                      <div className="flex flex-wrap gap-x-2">
                        {game.genres?.map((genre) => (
                          <span className={' my-0.5  title_type '} key={genre.id}>
                            {genre.name}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-x-1">
                        {game.platforms?.map((platform) => (
                          <span className={' title_type '} key={platform.id}>
                            {platform.abbreviation}
                          </span>
                        ))}
                      </div>
                      <div className="text-gray-300 text-left text-ellipsis overflow-hidden">
                        <p>{game.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
