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
import { motion, AnimatePresence } from 'framer-motion';

import { FaStar } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { MdFavoriteBorder } from 'react-icons/md';
interface ISwiperLayout {
  data?: GamesResponse;
  title: string;
  typeImage: 'poster' | 'art';
  isLoading?: boolean;
}
export default function SwiperLayoutCategory({ data, title, typeImage, isLoading }: ISwiperLayout) {
  const swiperRef = useRef<any>();

  const typeBreakpoints = {
    poster: {
      1024: {
        slidesPerView: 5,
      },
      640: {
        slidesPerView: 4,
      },
      320: {
        slidesPerView: 3,
      },
    },

    art: {
      1024: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  };

  const currentBreakpoints = typeBreakpoints[typeImage];
  return (
    <AnimatePresence>
      <motion.div
        className={cn(style.wrapper_layout, 'hidden py-2')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
          breakpoints={currentBreakpoints}
          className="mySwiper_layout"
        >
          {data?.map((game) => (
            <SwiperSlide
              className={cn(`relative overflow-hidden rounded-lg z-50 flex backdrop-blur`)}
              key={game.id}
            >
              <Link
                key={game.id}
                href={`/game/${game.id}`}
                className={cn('flex flex-col w-full h-full rounded-lg', style.img)}
              >
                {typeImage === 'poster' && (
                  <>
                    <div className={cn('relative')}>
                      <Image
                        image_id={game.cover && game.cover.image_id}
                        size={'cover_big'}
                        styleName={'rounded-lg object-cover flex-1 overflow-hidden'}
                        quality={100}
                        ratio={4 / 5}
                      />
                      <div className={cn('rounded-lg', style.game_info)}>
                        <div className="flex flex-wrap  gap-x-1">
                          {game.genres?.map((genre) => (
                            <p className={'title_type'} key={genre.id}>
                              {genre.name}
                            </p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-x-1">
                          {game.platforms?.map((platform) => (
                            <p key={platform.id}>{platform.abbreviation}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-1 ">
                      <h2
                        className={'flex text-start text-white title_card flex-1 overflow_line_two'}
                      >
                        {game.name}
                      </h2>
                    </div>
                  </>
                )}
                {typeImage === 'art' && (
                  <div className={cn('', style.card_art)}>
                    <Image
                      isLoading={isLoading}
                      image_id={game.artworks && game.artworks[0].image_id}
                      size={'screenshot_med'}
                      styleName={
                        'rounded-t-lg object-cover ease-in-out duration-300 flex-1 h-max hover:blur-md '
                      }
                      quality={70}
                      ratio={16 / 9}
                    />

                    <div className={style.card_info}>
                      {isLoading ? (
                        <Skeleton count={1} />
                      ) : (
                        <h2
                          className={
                            ' title_card flex flex-1 ease-in-out duration-300   md:overflow_line_two ms:whitespace-nowrap overflow-hidden text-ellipsis    '
                          }
                        >
                          {game.name}
                        </h2>
                      )}
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

                    {/*{title === 'Coming soon...' && (*/}
                    {/*  <span*/}
                    {/*    className={*/}
                    {/*      'absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 title bg-black/80 backdrop-blur p-2 rounded-lg'*/}
                    {/*    }*/}
                    {/*  >*/}
                    {/*    {new Date(game?.first_release_date! * 1000).toLocaleDateString()}*/}
                    {/*  </span>*/}
                    {/*)}*/}
                  </div>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </AnimatePresence>
  );
}
