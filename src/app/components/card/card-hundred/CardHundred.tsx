import { Games } from '@/interface/games/interface-games';
import ImageCustom from '@/app/components/image/Image';

import React from 'react';

interface ICardHundred {
  data: Games;
  isPending?: boolean;
}
export default function CardHundred({ data }: ICardHundred) {
  return (
    <div className={'flex    gap-x-2  w-full h-full '}>
      <div className="w-[150px] h-full">
        <div>
          <ImageCustom
            styleName={'rounded-lg  '}
            image_id={data.cover?.image_id}
            size={'cover_big'}
            ratio={3 / 4}
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <h2 className={'text-sm sm:text-base md:text-lg lg:text-xl'}>{data.name}</h2>
        <div className="">
          <div className="flex flex-wrap gap-1">
            {data.genres?.map((genre) => (
              <span className={'text-light-gray text-xs sm:text-sm '} key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
          <div className=" flex-wrap hidden gap-1 ls:flex ">
            {data.platforms?.map((platform) => (
              <span className={'text-light-gray text-xs sm:text-sm '} key={platform.id}>
                {platform.abbreviation}
              </span>
            ))}
          </div>
        </div>
        <div className="text-white/50 text-xs  hidden ls:line-clamp-3 sm:text-sm   ">
          {data.storyline}
        </div>
      </div>
    </div>
  );
}
