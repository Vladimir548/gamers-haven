'use client';

import FilterSliderPlaceholder from '@/app/components/filters-box/FilterSliderPlaceholder';
import { useDispatch } from 'react-redux';
import { getMinRating, getMaxRating } from '@/app/redux/slice/filters/rating-slice';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';

export default function FilterRating() {
  const { ratingMin, ratingMax } = useTypedSelector((state) => state.rating);
  const dispatch = useDispatch();
  return (
    <div>
      <FilterSliderPlaceholder
        title={'Rating'}
        minValue={0}
        maxValue={100}
        step={5}
        dispatchMinFn={(value: number) => dispatch(getMinRating(value))}
        dispatchMaxFn={(value: number) => dispatch(getMaxRating(value))}
        changeValueMax={ratingMax}
        changeValueMin={ratingMin}
      />
    </div>
  );
}
