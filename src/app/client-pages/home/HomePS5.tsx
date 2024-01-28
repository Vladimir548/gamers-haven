'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import SwiperCompanies from '@/app/client-pages/swiper/SwiperCompanies';

export default function HomePS5() {
  const { data, isSuccess } = useQuery({
    queryKey: ['home-ps5'],
    queryFn: () => QueryHome.getPS5Games(),
  });
  return (
    <div className={'flex flex-col'}>
      <SwiperLayoutCategory
        typeImage={'art'}
        isLoading={isSuccess}
        data={data}
        title={'PlayStation exclusive'}
      />
    </div>
  );
}
