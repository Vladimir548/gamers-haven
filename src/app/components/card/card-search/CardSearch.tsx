'use client';

import { SearchResponse } from '@/interface/interface-search';
import { InfiniteData } from '@tanstack/react-query';
import ImageCustom from '@/app/components/image/Image';
import style from './style.module.scss';
import Link from 'next/link';
import { GamesResponse } from '@/interface/games/interface-games';
interface ICardSearch {
  data: InfiniteData<{ data: GamesResponse; nextOffset: number }> | undefined;
}
export default function CardSearch({ data }: ICardSearch) {
  return (
    <div className={style.container}>
      {data?.pages.map((page) =>
        page.data.map((game) => (
          <div key={game.id} className={'flex  min-w-full rounded-lg '}>
            <Link
              href={`/game/${game?.id}`}
              className="flex flex-col p-1 w-full items-stretch bg-primary rounded-md shadow-[0_0_4px_0_rgb(68,68,68)] ease-linear duration-300 overflow-hidden hover:bg-dark-violet"
            >
              <ImageCustom
                image_id={game?.cover?.image_id}
                size={'cover_big'}
                ratio={4 / 5}
                styleName={'rounded-lg'}
              />
              <div className="">
                <h2 className={style.title}>{game.name}</h2>
              </div>
            </Link>
          </div>
        )),
      )}
    </div>
  );
}
