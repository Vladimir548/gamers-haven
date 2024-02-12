'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import SwiperCatagorySkeleton from '@/app/client-pages/swiper/SwiperCatagorySkeleton';

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
        <SwiperCatagorySkeleton />
      )}
    </div>
  );
}
