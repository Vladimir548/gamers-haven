import Skeleton from 'react-loading-skeleton';
import style from './style.module.scss';
import React from 'react';
export const SkeletonCardOne = () => {
  const cards = Array.from({ length: 20 });
  return (
    <div className={style.container}>
      {cards.map((card, index) => (
        <div key={index} className={'w-full'}>
          <Skeleton
            count={1}
            width={'100%'}
            height={'inherit'}
            containerClassName={'w-[inherit] h-[16.8em] aspect-[3/4]'}
            baseColor={'#1f2937'}
            highlightColor={'#374151'}
          />
          <Skeleton
            count={1}
            width={'100%'}
            containerClassName={style.title}
            baseColor={'#1f2937'}
            highlightColor={'#374151'}
          />
          <div className="flex justify-between items-center w-full gap-x-1">
            <Skeleton
              count={1}
              width={'100%'}
              containerClassName={'text-sm w-full'}
              baseColor={'#1f2937'}
              highlightColor={'#374151'}
            />
            <Skeleton
              count={1}
              width={'100%'}
              containerClassName={'text-sm w-full'}
              baseColor={'#1f2937'}
              highlightColor={'#374151'}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
