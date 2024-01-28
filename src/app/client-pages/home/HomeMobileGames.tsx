'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';

export default function HomeMobileGames() {
  const { data, isSuccess } = useQuery({
    queryKey: ['home-mobile-games'],
    queryFn: () => QueryHome.getMobileGames(),
  });
  return (
    <div>
      <SwiperLayoutCategory
        title={'Mobile games'}
        typeImage={'art'}
        data={data}
        isLoading={isSuccess}
      />
    </div>
  );
}
