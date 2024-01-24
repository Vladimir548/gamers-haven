'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QueryGames } from '@/app/query/query-games';

import Card from '@/app/components/card/Card';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '@/app/components/loading/Loading';

import SwiperHome from '@/app/client-pages/swiper/SwiperHome';
import FilterSortContent from '@/app/components/block-filter-sort/FilterSortContent';
import style from './style.module.scss';
import { UrlParams } from '@/tools/url-params/UrlParams';

export default function Games() {
  const { filters, queryParams, urlParams } = UrlParams();

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['games-all', queryParams],
    queryFn: ({ pageParam }) => QueryGames.getGames(filters, 20, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextOffset,
  });

  const lengthData = data?.pages.slice(-1)[0];
  return (
    <>
      <div className="">
        <SwiperHome QueryFn={QueryGames.getSwiperGames} />
      </div>
      <FilterSortContent urlParams={urlParams} />

      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={lengthData?.data?.length === 20}
        loader={lengthData?.data?.length === 20 && <Loading />}
        dataLength={data?.pages?.length ? data.pages.length : 20}
      >
        <div className={style.container}>
          {data?.pages.map((game) =>
            game.data.map((game) => (
              <div key={game.id} className={'flex min-w-full rounded-lg '}>
                <Card
                  name={game.name}
                  id={game.id}
                  genres={game?.genres}
                  poster={game.cover?.image_id}
                  rating={game.rating | game.total_rating}
                  releaseYear={game.first_release_date}
                />
              </div>
            )),
          )}
        </div>
      </InfiniteScroll>
    </>
  );
}
