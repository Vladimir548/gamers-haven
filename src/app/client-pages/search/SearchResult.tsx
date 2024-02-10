'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { QuerySearch } from '@/app/query/query-search';
import { useSearchParams } from 'next/navigation';
import CardSearch from '@/app/components/card/card-search/CardSearch';
import Loading from '@/app/components/loading/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function SearchResult() {
  const queryValue = useSearchParams();
  const valueSearch = queryValue.get('q') ? queryValue.get('q') : '';
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['get-games-result', queryValue.get('q')],
    queryFn: ({ pageParam }) => QuerySearch.getSearchResult(valueSearch, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextOffset,
  });
  const lengthData = data?.pages.slice(-1)[0];

  return (
    <div>
      {!isLoading ? (
        <>
          {data?.pages[0]?.data.length ? (
            <InfiniteScroll
              next={() => fetchNextPage()}
              hasMore={lengthData?.data?.length === 20}
              loader={lengthData?.data?.length === 20 && <Loading />}
              dataLength={data?.pages?.length ? data.pages.length : 20}
            >
              <CardSearch data={data} />
            </InfiniteScroll>
          ) : (
            <div className={'flex justify-center items-center'}>
              Nothing found, check your request
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
