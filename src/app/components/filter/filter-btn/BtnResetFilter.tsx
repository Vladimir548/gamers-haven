import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { resetValueRating } from '@/app/redux/slice/filters/rating-slice';
import { resetValueCountRating } from '@/app/redux/slice/filters/rating-count-slice';
import { resetValueYear } from '@/app/redux/slice/filters/year-slice';
import { resetGenres } from '@/app/redux/slice/filters/genres-slice';
import { resetModes } from '@/app/redux/slice/filters/modes-slice';
import { resetThemes } from '@/app/redux/slice/filters/themes-slice';
import { resetPlatforms } from '@/app/redux/slice/filters/platforms-slice';
import { resetEngine } from '@/app/redux/slice/filters/engines-slice';

export default function BtnResetFilter() {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const handlerFilterReset = () => {
    push(`/games`);
    dispatch(resetValueRating());
    dispatch(resetValueCountRating());
    dispatch(resetValueYear());
    dispatch(resetGenres());
    dispatch(resetModes());
    dispatch(resetThemes());
    dispatch(resetPlatforms());
    dispatch(resetEngine());
  };
  return (
    <div className={'w-full'}>
      <button
        onClick={handlerFilterReset}
        className="cursor-pointer py-2 bg-red-700 ease-in-out w-full h-full rounded-md duration-300 hover:bg-red-900"
      >
        Reset all
      </button>
    </div>
  );
}
