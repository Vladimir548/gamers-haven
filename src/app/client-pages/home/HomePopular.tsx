'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';

export default function HomePopular() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['home-popular'],
    queryFn: () => QueryHome.getPopular(),
  });
  return (
    <div className={'flex flex-col'}>
      {isSuccess ? (
        <SwiperLayoutCategory
          isLoading={isLoading}
          data={data}
          title={'Popular'}
          typeImage={'art'}
        />
      ) : (
        '  loading... popular'
      )}
    </div>
  );
}
