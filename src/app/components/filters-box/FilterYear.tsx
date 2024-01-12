'use client';

import FilterSliderPlaceholder from '@/app/components/filters-box/FilterSliderPlaceholder';
import { getMaxYear, getMinYear } from '@/app/redux/slice/filters/year-slice';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

export default function FilterYear() {
  const { yearMin, yearMax } = useTypedSelector((state) => state.years);
  const dispatch = useDispatch();
  return (
    <div>
      <FilterSliderPlaceholder
        title={'Year'}
        minValue={2000}
        maxValue={2024}
        changeValueMax={yearMax}
        changeValueMin={yearMin}
        step={1}
        dispatchMaxFn={(value: number) => dispatch(getMaxYear(value))}
        dispatchMinFn={(value: number) => dispatch(getMinYear(value))}
      />
    </div>
  );
}
