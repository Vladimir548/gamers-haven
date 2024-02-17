'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QueryGames } from '@/app/query/query-games';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '@/app/components/loading/Loading';

import SwiperHome from '@/app/client-pages/swiper/SwiperHome';
import FilterSortContent from '@/app/components/block-filter-sort/FilterSortContent';

import { UrlParams } from '@/tools/url-params/UrlParams';
import Card from '@/app/components/card/card-one/Card';
import CardTwo from '@/app/components/card/card-two/CardTwo';

import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import React, { useEffect } from 'react';
import { SkeletonCardOne } from '@/app/components/card/card-one/SkeletonCardOne';
import SkeletonCardTwo from '@/app/components/card/card-two/SkeletonCardTwo';
import Toast from '@/app/components/toast/Toast';
import toast from 'react-hot-toast';

export default function Games() {
  const { filters, queryParams, urlParams } = UrlParams();

  const { data, fetchNextPage, isSuccess, isPending, isFetching } = useInfiniteQuery({
    queryKey: ['games-all', queryParams],
    queryFn: ({ pageParam }) => QueryGames.getGames(filters, 20, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextOffset,
  });

  const lengthData = data?.pages.slice(-1)[0];
  const { typeGamesCard } = useTypedSelector((state) => state.cardType);
  return (
    <>
      <div className="">
        <SwiperHome QueryFn={QueryGames.getSwiperGames} />
      </div>
      <FilterSortContent urlParams={urlParams} />

      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={lengthData?.data?.length === 20}
        initialScrollY={200}
        loader={lengthData?.data?.length === 20 && <Loading />}
        dataLength={data?.pages?.length ? data.pages.length : 20}
      >
        {typeGamesCard === 'card-one' && <Card data={data} isPending={isPending} />}

        {typeGamesCard === 'card-two' && <CardTwo data={data} isPending={isPending} />}
      </InfiniteScroll>
    </>
  );
}
