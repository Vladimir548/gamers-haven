import Skeleton from 'react-loading-skeleton';
import React from 'react';

export default function SkeletonCardHundred() {
  return (
    <div
      className={
        'flex w-full flex-col gap-y-1 h-[190px] ms:h-[130px] ls:h-[150px] sm:h-[170px] md:h-[160px] lg:h-[170px] xl:h-[180px] 2xl:h-[200px] '
      }
    >
      <div className="h-full">
        <Skeleton
          count={1}
          width={'100%'}
          height={'inherit'}
          containerClassName={'w-[inherit] h-full aspect-[3/4]'}
          baseColor={'#1f2937'}
          highlightColor={'#374151'}
        />
      </div>
      <div className=""></div>
    </div>
  );
}
