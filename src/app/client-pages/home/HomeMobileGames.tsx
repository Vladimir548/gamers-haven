'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import SwiperCategorySkeleton from '@/app/client-pages/swiper/SwiperCategorySkeleton';

export default function HomeMobileGames() {
  const { data, isPending } = useQuery({
    queryKey: ['home-mobile-games'],
    queryFn: () => QueryHome.getMobileGames(),
  });
  return (
    <div>
      {!isPending ? (
        <SwiperLayoutCategory title={'Mobile games'} data={data} />
      ) : (
        <SwiperCategorySkeleton />
      )}
    </div>
  );
}
