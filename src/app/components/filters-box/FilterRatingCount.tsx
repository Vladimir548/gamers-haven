import FilterSliderPlaceholder from '@/app/components/filters-box/FilterSliderPlaceholder';
import { useDispatch } from 'react-redux';

import { getMaxRatingCount, getMinRatingCount } from '@/app/redux/slice/filters/rating-count-slice';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';

export default function FilterRatingCount() {
  const { ratingCountMin, ratingCountMax } = useTypedSelector((state) => state.ratingCount);
  const dispatch = useDispatch();
  return (
    <div>
      <FilterSliderPlaceholder
        title={'Rating count'}
        minValue={0}
        maxValue={5000}
        step={5}
        dispatchMinFn={(value: number) => dispatch(getMinRatingCount(value))}
        dispatchMaxFn={(value: number) => dispatch(getMaxRatingCount(value))}
        changeValueMax={ratingCountMax}
        changeValueMin={ratingCountMin}
      />
    </div>
  );
}
