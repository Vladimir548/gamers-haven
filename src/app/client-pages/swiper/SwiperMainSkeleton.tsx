import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import Skeleton from 'react-loading-skeleton';
import React from 'react';
export default function SwiperMainSkeleton() {
  const slides = Array.from({ length: 2 }).map((el, index) => `Slide ${index + 1}`);
  return (
    <div>
      <Swiper
        modules={[Virtual]}
        spaceBetween={10}
        slidesPerView={2}
        virtual
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
