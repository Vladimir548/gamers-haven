'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';

export default function HomeMultiplayer() {
  const { data, isSuccess } = useQuery({
    queryKey: ['home-multiplayer'],
    queryFn: () => QueryHome.getMultiplayer(),
  });
  return (
    <div>
      <SwiperLayoutCategory
        title={'Multiplayer'}
        typeImage={'art'}
        data={data}
        isLoading={isSuccess}
      />
    </div>
  );
}
