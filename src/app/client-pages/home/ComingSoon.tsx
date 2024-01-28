'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';

export default function ComingSoon() {
  const { data, isSuccess } = useQuery({
    queryKey: ['home-top'],
    queryFn: () => QueryHome.getComing(),
  });

  if (!data) return '';

  return (
    <div>
      <SwiperLayoutCategory
        title={'Coming soon...'}
        typeImage={'art'}
        data={data}
        isLoading={isSuccess}
      />
    </div>
  );
}
