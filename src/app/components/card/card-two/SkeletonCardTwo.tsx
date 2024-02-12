import style from './style.module.scss';
import Skeleton from 'react-loading-skeleton';
import React from 'react';
export default function SkeletonCardTwo() {
  const cards = Array.from({ length: 20 });
  return (
    <div className={style.container}>
      {cards.map((card, index) => (
        <div key={index} className={'w-full flex gap-x-1'}>
          <div className="w-1/2">
            <Skeleton
              count={1}
              width={'100%'}
              height={'inherit'}
              containerClassName={'w-1/2 h-[200px] aspect-video'}
              baseColor={'#1f2937'}
              highlightColor={'#374151'}
            />
          </div>
          <div className="w-1/2 h-full flex flex-col">
            <Skeleton
              count={1}
              width={'100%'}
              containerClassName={style.title}
              baseColor={'#1f2937'}
              highlightColor={'#374151'}
            />
            <Skeleton
              count={9}
              width={'100%'}
              containerClassName={'text-sm'}
              baseColor={'#1f2937'}
              highlightColor={'#374151'}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
