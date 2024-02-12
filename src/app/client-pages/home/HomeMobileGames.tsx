'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import SwiperCatagorySkeleton from '@/app/client-pages/swiper/SwiperCatagorySkeleton';

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
        <SwiperCatagorySkeleton />
      )}
    </div>
  );
}
