'use client';

import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { InterfaceFilterSort } from '@/interface/interface-filter-sort';
import { useEffect } from 'react';
import { getMaxYear, getMinYear } from '@/app/redux/slice/filters/year-slice';
import { getMaxRating, getMinRating } from '@/app/redux/slice/filters/rating-slice';
import { getMaxRatingCount, getMinRatingCount } from '@/app/redux/slice/filters/rating-count-slice';
import { addGenres } from '@/app/redux/slice/filters/genres-slice';
import { addThemes } from '@/app/redux/slice/filters/themes-slice';
import { addEngines } from '@/app/redux/slice/filters/engines-slice';
import { addModes } from '@/app/redux/slice/filters/modes-slice';
import { addPlatforms } from '@/app/redux/slice/filters/platforms-slice';
import { getSort } from '@/app/redux/slice/sort-game-slice';

export const UrlParams = () => {
  const dispatch = useDispatch();

  const paramsSearch = useSearchParams();

  const { ratingMin, ratingMax } = useTypedSelector((state) => state.rating);
  const { ratingCountMin, ratingCountMax } = useTypedSelector((state) => state.ratingCount);
  const { yearMin, yearMax } = useTypedSelector((state) => state.years);
  const { genre } = useTypedSelector((state) => state.genres);
  const { theme } = useTypedSelector((state) => state.themes);
  const { mode } = useTypedSelector((state) => state.modes);
  const { engine } = useTypedSelector((state) => state.engines);
  const { platform } = useTypedSelector((state) => state.platforms);
  const { sort } = useTypedSelector((state) => state.sortGame);

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
  }, [paramsSearch, dispatch]);
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

  const queryParams = Object.fromEntries(paramsSearch.entries());

  return { queryParams, filters, urlParams };
};
