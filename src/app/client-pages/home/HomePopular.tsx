'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import Loading from '@/app/components/loading/Loading';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import SwiperCatagorySkeleton from '@/app/client-pages/swiper/SwiperCatagorySkeleton';

export default function HomePopular() {
  const { data, isPending } = useQuery({
    queryKey: ['home-popular'],
    queryFn: () => QueryHome.getPopular(),
  });

  return (
    <div className={'flex flex-col'}>
      {!isPending ? (
        <SwiperLayoutCategory data={data} title={'Popular'} />
      ) : (
        <SwiperCatagorySkeleton />
      )}
    </div>
  );
}
