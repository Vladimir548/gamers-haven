'use client';
import HomePopular from '@/app/client-pages/home/HomePopular';
import HomeEvents from '@/app/client-pages/home/HomeEvents';
import ComingSoon from '@/app/client-pages/home/ComingSoon';
import HomePS5 from '@/app/client-pages/home/HomePS5';
import HomeMultiplayer from '@/app/client-pages/home/HomeMultiplayer';
import dynamic from 'next/dynamic';
import HomeMobileGames from '@/app/client-pages/home/HomeMobileGames';
import { QueryHome } from '@/app/query/query-home';

import SwiperHome from '@/app/client-pages/swiper/SwiperHome';
import { Suspense } from 'react';
import SwiperCategorySkeleton from '@/app/client-pages/swiper/SwiperCategorySkeleton';

export default function Home() {
  return (
    <div className={'px-1'}>
      <div className="">
        <SwiperHome QueryFn={QueryHome.getSwiper} />
      </div>
      <Suspense fallback={<SwiperCategorySkeleton />}>
        <div className="">
          <HomePopular />
        </div>
      </Suspense>
      <div className="">
        <HomeEvents />
      </div>
      <div className="">
        <ComingSoon />
      </div>{' '}
      {/*<div className="">*/}
      {/*  <HomeGenres />*/}
      {/*</div>*/}
      <div className="">
        <HomePS5 />
      </div>{' '}
      <div className="">
        <HomeMultiplayer />
      </div>{' '}
      <div className="">
        <HomeMobileGames />
      </div>
    </div>
  );
}
