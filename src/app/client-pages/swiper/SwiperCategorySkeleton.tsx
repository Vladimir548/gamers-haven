import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';
import Skeleton from 'react-loading-skeleton';
import React from 'react';

export default function SwiperCatagorySkeleton() {
  const slides = Array.from({ length: 4 }).map((el, index) => `Slide ${index + 1}`);

  return (
    <div>
      <h2 className={' title_sections py-1'}>
        <Skeleton
          count={1}
          width={'40%'}
          containerClassName={'w-[inherit] pr-1 title_sections py-1'}
          baseColor={'#1f2937'}
          highlightColor={'#374151'}
        />
      </h2>
      <Swiper
        modules={[Virtual]}
        spaceBetween={10}
        slidesPerView={4}
        virtual
        className="mySwiper_layout"
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
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            key={slideContent}
            virtualIndex={index}
            className={'w-full h-full flex flex-col'}
          >
            <Skeleton
              count={1}
              width={'inherit'}
              containerClassName={'w-[inherit] aspect-video'}
              baseColor={'#1f2937'}
              highlightColor={'#374151'}
              style={{
                width: 'inherit',
                height: '100%',
              }}
            />
            <div className="w-[inherit] bg-gray-900">
              <h2 className="w-[inherit] py-1">
                <Skeleton
                  count={1}
                  width={'inherit'}
                  containerClassName={'w-[inherit] title_card'}
                  baseColor={'#1f2937'}
                  highlightColor={'#374151'}
                />
              </h2>
              <div className="flex justify-between items-center  w-[inherit]">
                <Skeleton
                  count={1}
                  width={'100%'}
                  containerClassName={'w-[inherit] pr-1 md:text-sm ms:text-[10px]'}
                  baseColor={'#1f2937'}
                  highlightColor={'#374151'}
                />
                <Skeleton
                  count={1}
                  width={'100%'}
                  containerClassName={'w-[inherit] pl-1 md:text-sm ms:text-[10px]'}
                  baseColor={'#1f2937'}
                  highlightColor={'#374151'}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
