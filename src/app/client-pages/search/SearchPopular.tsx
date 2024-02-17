'use client';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { QuerySearch } from '@/app/query/query-search';
import { QueryGames } from '@/app/query/query-games';
import Card from '@/app/components/card/card-one/Card';
import Loading from '@/app/components/loading/Loading';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function SearchPopular() {
  const { data, fetchNextPage, isPending } = useInfiniteQuery({
    queryKey: ['games-all'],
    queryFn: ({ pageParam }) => QuerySearch.getPopularSearch(20, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextOffset,
  });
  const lengthData = data?.pages.slice(-1)[0];
  return (
    <div>
      <h2 className={'title_sections'}>Often searched</h2>
      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={lengthData?.data?.length === 20}
        initialScrollY={200}
        loader={lengthData?.data?.length === 20 && <Loading />}
        dataLength={data?.pages?.length ? data.pages.length : 20}
      >
        <Card data={data} isPending={isPending} />
      </InfiniteScroll>
    </div>
  );
}
