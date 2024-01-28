'use client';

import cn from 'classnames';
import style from './style.module.scss';
interface IGameRating {
  rating: number | undefined;
  rating_count: number | undefined;
}
export default function GameRating({ rating, rating_count }: IGameRating) {
  return (
    <div
      className={cn(
        'w-[220px] h-[220px] flex justify-center items-center border-none bg-gradient-to-br rounded-lg from-violet-500 to-fuchsia-500',
        style.rating,
      )}
    >
      <div className="flex flex-col">
        <div className=" flex justify-center items-center w-[90px] h-[90px] rounded-full">
          <span className={'text-3xl font-bold'}> {rating?.toFixed(1)}%</span>
        </div>
        <div className="">
          <span>Count vote: {rating_count}</span>
        </div>
      </div>
    </div>
  );
}
