'use client';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import Image from '@/app/components/image/Image';

import { GamesResponse } from '@/interface/games/interface-games';
export default function SwiperHome() {
  const { data, isLoading } = useQuery({
    queryKey: ['swiper-home'],
    queryFn: () => QueryHome.getSwiper(),
  });

  const [resolvedData, setResolvedData] = useState<GamesResponse>([]);

  useEffect(() => {
    if (!isLoading && data) {
      Promise.all(data).then((res) => setResolvedData(res));
    }
  }, [isLoading, data]); // Зависимости useEffect от isLoading и data

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
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {resolvedData?.map((game) => (
          <SwiperSlide className={'relative rounded-lg'} key={game.id}>
            <Image
              image_id={game.artworks && game.artworks[0].image_id}
              size={'720p'}
              styleName={'rounded-lg'}
              ratio={16 / 9}
              quality={40}
            />
            <div
              style={{
                backgroundColor: `rgba(${game?.palettes[0]?.colors.join(',')},.4)`,
              }}
              className={`absolute left-0 bottom-0 w-full h-full  z-10 backdrop-blur-[5px] ease-in-out duration-300  rounded-lg overflow-hidden hover:backdrop-blur-[15px]`}
            >
              <div className="flex justify-items-start w-full  items-end  px-3 py-2 h-full ">
                <div className="flex flex-col gap-y-2">
                  <h2 className={'flex text-white title font-bold'}>{game.name}</h2>
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
                  {/*<div className={'flex text-start'}>*/}
                  {/*  <p className={style.storyline}>{game.storyline}</p>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
