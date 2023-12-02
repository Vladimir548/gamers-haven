'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './style.module.scss';
import './styles.css';
import Image from '@/app/components/image/Image';
import React, { useEffect, useRef, useState } from 'react';
import { GamesResponse } from '@/interface/games/interface-games';
import Link from 'next/link';
import cn from 'classnames';
import SwiperButtonNavigation from '@/app/client-pages/swiper/SwiperButtonNavigation';
import { AnimatePresence, motion } from 'framer-motion';
import { CompaniesResponse } from '@/interface/interface-companies';
interface ISwiperLayout {
  data?: CompaniesResponse;
  title: string;
  isLoading?: boolean;
}
export default function SwiperCompanies({ data, title, isLoading }: ISwiperLayout) {
  const swiperRef = useRef<any>();

  return (
    <AnimatePresence>
      <motion.div
        className={cn(style.wrapper_layout, 'hidden')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className={' title_sections'}>{title}</h2>
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
              slidesPerView: 5,
            },
            640: {
              slidesPerView: 4,
            },
            320: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper_layout"
        >
          {data?.map((game) => (
            <SwiperSlide
              className={cn(`relative overflow-hidden rounded-lg z-50 flex backdrop-blur`)}
              key={game.id}
            >
              <Link
                key={game.id}
                href={'/ff'}
                className={cn('flex flex-col w-full h-full rounded-lg', style.img)}
              >
                <>
                  <div className={cn('relative')}>
                    <Image
                      image_id={game.logo && game.logo.image_id}
                      size={'cover_big'}
                      styleName={'rounded-lg object-cover flex-1 overflow-hidden'}
                      quality={100}
                      ratio={4 / 5}
                    />
                  </div>

                  <div className="flex flex-col flex-1 p-1 ">
                    <h2
                      className={'flex text-start text-white title_card flex-1 overflow_line_two'}
                    >
                      {game.name}
                    </h2>
                  </div>
                </>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </AnimatePresence>
  );
}
