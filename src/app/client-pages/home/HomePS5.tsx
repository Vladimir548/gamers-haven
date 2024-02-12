'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';
import SwiperCompanies from '@/app/client-pages/swiper/SwiperCompanies';
import SwiperCatagorySkeleton from '@/app/client-pages/swiper/SwiperCatagorySkeleton';

export default function HomePS5() {
  const { data, isPending } = useQuery({
    queryKey: ['home-ps5'],
    queryFn: () => QueryHome.getPS5Games(),
  });
  return (
    <div className={'flex flex-col'}>
      {!isPending ? (
        <SwiperLayoutCategory data={data} title={'PlayStation exclusive'} />
      ) : (
        <SwiperCatagorySkeleton />
      )}
    </div>
  );
}
