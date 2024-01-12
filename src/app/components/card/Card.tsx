'use client';

import ImageCustom from '@/app/components/image/Image';
import { CiStar } from 'react-icons/ci';
import Link from 'next/link';

interface ICard {
  name: string | undefined;
  id: number | undefined;
  genres: string | undefined;
  releaseYear: number | undefined;
  poster: string | undefined;
  rating: number | undefined;
}
export default function Card({ name, id, poster, rating, genres }: ICard) {
  return (
    <div className={'flex relative'}>
      <Link
        href={`/game/${id}`}
        className="flex flex-col p-1 bg-primary rounded-md shadow-[0_0_4px_0_rgb(68,68,68)] ease-linear duration-300 overflow-hidden hover:bg-dark-violet"
      >
        <div className="absolute left-0 top-0 w-full h-full blur-[10px]">
          <ImageCustom image_id={poster} size={'micro'} ratio={1 / 1.3} quality={1} />
        </div>

        <div className="w-[214px]  max-h-[304px] ">
          <ImageCustom
            image_id={poster}
            size={'cover_big'}
            ratio={3 / 4}
            quality={100}
            styleName={'rounded-lg object-cover '}
          />
        </div>
        <div className=" p-1 flex relative z-10 flex-col h-full">
          <div className="flex-wrap flex flex-1 ">
            <h2 className={'overflow_line_two'}> {name}</h2>
          </div>
          <div className=" flex justify-between items-center gap-x-2 border-t-1 border-white/30">
            <div>
              <span className={'overflow_line_one'}>{genres}</span>
            </div>
            <div className="flex items-center gap-x-1">
              <span>
                <CiStar size={18} />
              </span>
              <span>{Number(rating).toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
