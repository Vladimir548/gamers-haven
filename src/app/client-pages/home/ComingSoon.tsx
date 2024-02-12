'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import SwiperCatagorySkeleton from '@/app/client-pages/swiper/SwiperCatagorySkeleton';

export default function ComingSoon() {
  const { data, isPending } = useQuery({
    queryKey: ['home-top'],
    queryFn: () => QueryHome.getComing(),
  });

  if (!data) return '';

  return (
    <div>
      {!isPending ? (
        <SwiperLayoutCategory title={'Coming soon...'} data={data} />
      ) : (
        <SwiperCatagorySkeleton />
      )}
    </div>
  );
}
