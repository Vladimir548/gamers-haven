'use client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { QueryGames } from '@/app/query/query-games';

import Card from '@/app/components/card/Card';

import Filter from '@/app/components/filter/Filter';
import SortingGame from '@/app/components/select/SortingGame';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { InterfaceFilterSort } from '@/interface/interface-filter-sort';
import { useEffect } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { getMaxRating, getMinRating } from '@/app/redux/slice/filters/rating-slice';
import { getMaxRatingCount, getMinRatingCount } from '@/app/redux/slice/filters/rating-count-slice';
import { getMaxYear, getMinYear } from '@/app/redux/slice/filters/year-slice';
import { addGenres, toggleGenres } from '@/app/redux/slice/filters/genres-slice';
import { addModes, toggleModes } from '@/app/redux/slice/filters/modes-slice';
import { addThemes, toggleThemes } from '@/app/redux/slice/filters/themes-slice';
import { addEngines, toggleEngines } from '@/app/redux/slice/filters/engines-slice';
import { addPlatforms, togglePlatforms } from '@/app/redux/slice/filters/platforms-slice';
import { getSort } from '@/app/redux/slice/sort-game-slice';
import Loading from '@/app/components/loading/Loading';

import SwiperHome from '@/app/client-pages/swiper/SwiperHome';
import FilterSortContent from '@/app/components/block-filter-sort/FilterSortContent';
import style from './style.module.scss';
export default function Games() {
  const { ratingMin, ratingMax } = useTypedSelector((state) => state.rating);
  const { ratingCountMin, ratingCountMax } = useTypedSelector((state) => state.ratingCount);
  const { yearMin, yearMax } = useTypedSelector((state) => state.years);
  const { genre } = useTypedSelector((state) => state.genres);
  const { theme } = useTypedSelector((state) => state.themes);
  const { mode } = useTypedSelector((state) => state.modes);
  const { engine } = useTypedSelector((state) => state.engines);
  const { platform } = useTypedSelector((state) => state.platforms);
  const { sort } = useTypedSelector((state) => state.sortGame);

  const dispatch = useDispatch();

  const paramsSearch = useSearchParams();
  const filters: InterfaceFilterSort = {
    ratingMin,
    ratingMax,
    ratingCountMin,
    ratingCountMax,
    yearMin,
    yearMax,
    genre,
    theme,
    mode,
    engine,
    platform,
    sort: paramsSearch.get('sort') || sort,
  };
  const urlParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => urlParams.append(key, String(item)));
    } else {
      urlParams.set(key, String(value));
    }
  });

  useEffect(() => {
    if (paramsSearch.size) {
      if (paramsSearch.get('yearMin')) {
        dispatch(getMinYear(Number(paramsSearch.get('yearMin'))));
      }
      if (paramsSearch.get('yearMax')) {
        dispatch(getMaxYear(Number(paramsSearch.get('yearMax'))));
      }
      if (paramsSearch.get('ratingMin')) {
        dispatch(getMinRating(Number(paramsSearch.get('ratingMin'))));
      }
      if (paramsSearch.get('ratingMax')) {
        dispatch(getMaxRating(Number(paramsSearch.get('ratingMax'))));
      }
      if (paramsSearch.get('ratingCountMin')) {
        dispatch(getMinRatingCount(Number(paramsSearch.get('ratingCountMin'))));
      }
      if (paramsSearch.get('ratingCountMax')) {
        dispatch(getMaxRatingCount(Number(paramsSearch.get('ratingCountMax'))));
      }
      if (paramsSearch.get('genre')) {
        dispatch(addGenres(Number(paramsSearch.get('genre'))));
      }
      if (paramsSearch.get('theme')) {
        dispatch(addThemes(Number(paramsSearch.get('theme'))));
      }
      if (paramsSearch.get('engine')) {
        dispatch(addEngines(Number(paramsSearch.get('engine'))));
      }
      if (paramsSearch.get('mode')) {
        dispatch(addModes(Number(paramsSearch.get('mode'))));
      }
      if (paramsSearch.get('platform')) {
        dispatch(addPlatforms(Number(paramsSearch.get('platform'))));
      }
      if (paramsSearch.get('sort')) {
        dispatch(getSort(String(paramsSearch.get('sort'))));
      }
    }
  }, [paramsSearch]);

  const queryParams = Object.fromEntries(paramsSearch.entries());
  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['games-all', queryParams],
    queryFn: ({ pageParam }) => QueryGames.getGames(filters, 20, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextOffset,
  });

  return (
    <>
      <div className="">
        <SwiperHome QueryFn={QueryGames.getSwiperGames} />
      </div>
      <FilterSortContent urlParams={urlParams} />
      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={true}
        loader={<Loading />}
        dataLength={data?.pages?.length ? data.pages.length : 20}
      >
        <div className={style.card}>
          {data?.pages.map((game) =>
            game.data.map((game) => (
              <div key={game.id} className={'flex'}>
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
