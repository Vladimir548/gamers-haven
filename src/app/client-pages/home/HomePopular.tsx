'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import SwiperLayoutCategory from '@/app/client-pages/swiper/SwiperLayoutCategory';

import SwiperCategorySkeleton from '@/app/client-pages/swiper/SwiperCategorySkeleton';

export default function HomePopular() {
  const { data, isPending } = useQuery({
    queryKey: ['home-popular'],
    queryFn: () => QueryHome.getPopular(),
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={'flex flex-col'}>
      {!isPending ? (
        <SwiperLayoutCategory data={data} title={'Popular'} />
      ) : (
        <SwiperCategorySkeleton />
      )}
    </div>
  );
}
