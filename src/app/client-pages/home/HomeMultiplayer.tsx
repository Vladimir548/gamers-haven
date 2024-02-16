'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import SwiperCategorySkeleton from '@/app/client-pages/swiper/SwiperCategorySkeleton';

export default function HomeMultiplayer() {
  const { data, isPending } = useQuery({
    queryKey: ['home-multiplayer'],
    queryFn: () => QueryHome.getMultiplayer(),
  });
  return (
    <div>
      {!isPending ? (
        <SwiperLayoutCategory title={'Multiplayer'} data={data} />
      ) : (
        <SwiperCategorySkeleton />
      )}
    </div>
  );
}
