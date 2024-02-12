'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './style.module.scss';
import './styles.css';
import Image from '@/app/components/image/Image';
import React, { useRef } from 'react';
import { GamesResponse } from '@/interface/games/interface-games';
import Link from 'next/link';
import cn from 'classnames';
import SwiperButtonNavigation from '@/app/client-pages/swiper/SwiperButtonNavigation';

import { FaStar } from 'react-icons/fa';
import 'react-loading-skeleton/dist/skeleton.css';

interface ISwiperLayout {
  data?: GamesResponse;
  title: string;
}
export default function SwiperLayoutCategory({ data, title }: ISwiperLayout) {
  const swiperRef = useRef<any>();

  return (
    <div className={cn(style.wrapper_layout, 'hidden py-2')}>
      <div className="flex justify-between items-center mb-2">
        <h2 className={' title_sections py-1'}>{title}</h2>
        <SwiperButtonNavigation swiperRef={swiperRef} />
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper_layout"
      >
        {data?.map((game) => (
          <>
            <SwiperSlide
              className={cn(`relative overflow-hidden rounded-lg z-50 flex backdrop-blur`)}
              key={game.id}
            >
              <Link
                key={game.id}
                href={`/game/${game.id}`}
                className={cn('flex flex-col w-full h-full rounded-lg', style.img)}
              >
                <div className={cn('', style.card_art)}>
                  <Image
                    image_id={game.artworks && game.artworks[0].image_id}
                    size={'screenshot_med'}
                    styleName={
                      'rounded-t-lg object-cover ease-in-out duration-300 flex-1 h-max hover:blur-md '
                    }
                    quality={70}
                    ratio={16 / 9}
                  />

                  <div className={style.card_info}>
                    <h2
                      className={
                        ' title_card flex flex-1 ease-in-out duration-300   md:overflow_line_two ms:whitespace-nowrap overflow-hidden text-ellipsis    '
                      }
                    >
                      {game.name}
                    </h2>

                    <div className="flex items-center justify-between">
                      {game?.genres && (
                        <div className="whitespace-nowrap overflow-hidden text-ellipsis md:text-sm ms:text-[10px] ">
                          {game?.genres[0]?.name}
                        </div>
                      )}
                      {game.rating && (
                        <div className="flex gap-x-1 items-center md:text-sm ms:text-[10px]">
                          <span>
                            <FaStar />
                          </span>
                          <span>{Number(game?.rating?.toFixed(0))}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
