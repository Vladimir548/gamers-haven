// import SwiperHome from '@/app/client-pages/swiper/SwiperHome';
import HomePopular from '@/app/client-pages/home/HomePopular';
import HomeEvents from '@/app/client-pages/home/HomeEvents';
import ComingSoon from '@/app/client-pages/home/ComingSoon';
import HomeGenres from '@/app/client-pages/home/HomeGenres';
import HomePS5 from '@/app/client-pages/home/HomePS5';
import HomeMultiplayer from '@/app/client-pages/home/HomeMultiplayer';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HomeMobileGames from '@/app/client-pages/home/HomeMobileGames';
const DynamicSwiperHome = dynamic(() => import('@/app/client-pages/swiper/SwiperHome'));
export default function Home() {
  return (
    <div>
      <div className="">
        <Suspense
          fallback={<div className={'absolute left-1/2 top-1/2 z-50 text-white'}>Loading</div>}
        >
          <DynamicSwiperHome />
        </Suspense>
      </div>
      <div className="">
        <HomePopular />
      </div>
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
