'use client';
import style from './style.module.scss';
import { GenresResponse } from '@/interface/interface-genres';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
interface ICard {
  image: string;
  title: string;

  id: number;
}
export default function Card({ image, title, id }: ICard) {
  return (
    <div className={'flex'}>
      <div className={cn('flex', style.card)}>
        <Link className={'flex'} href={`/games/${id}`}>
          <div className="w-[300px]  rounded-lg  border-2 border-fuchsia-600 flex flex-col overflow-hidden">
            <div className="w-full h-[150px] shadow  ">
              <Image
                src={`${
                  image
                    ? `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${image}.jpg`
                    : ''
                }`}
                alt={title}
                height={185}
                width={250}
                className={'object-cover w-full h-full rounded-lg '}
              />
            </div>
            <div
              className={cn(
                'p-2 flex flex-1 flex-col backdrop-blur ease-in-out duration-300 rounded-t-lg bg-[#000428]/70  ',
              )}
            >
              <h2 className={cn('text-light-gray flex flex-1', style.title)}> {title}</h2>
              {/*<div className="text-light-gray flex gap-x-1">*/}
              {/*  {genres.map((genre) => (*/}
              {/*    <span className={'text-xs'} key={genre.id}>*/}
              {/*      {genre.name}*/}
              {/*    </span>*/}
              {/*  ))}*/}
              {/*</div>*/}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
