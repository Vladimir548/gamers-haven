'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import { useEffect, useState } from 'react';
import { GamesResponse } from '@/interface/games/interface-games';
export default function HomePopular() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['home-popular'],
    queryFn: () => QueryHome.getPopular(),
  });
  return (
    <div className={'flex flex-col'}>
      <SwiperLayoutCategory isLoading={isSuccess} data={data} title={'Popular'} typeImage={'art'} />
    </div>
  );
}
