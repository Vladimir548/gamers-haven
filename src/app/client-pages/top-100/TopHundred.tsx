'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryCategory } from '@/app/query/query-category';
import { GiCurledLeaf } from 'react-icons/gi';
import React, { useRef } from 'react';
import Link from 'next/link';
import CardHundred from '@/app/components/card/card-hundred/CardHundred';
import { FaStar } from 'react-icons/fa';
import SkeletonCardHundred from '@/app/components/card/card-hundred/SkeletonCardHundred';
export default function TopHundred() {
  const { data, isPending } = useQuery({
    queryKey: ['get-hundred'],
    queryFn: () => QueryCategory.getTopHundred(),
  });

  return (
    <div className={'flex flex-col gap-y-1 '}>
      {data?.map((game, index) => (
        <>
          {!isPending ? (
            <Link
              href={`/game/${game.id}`}
              key={game.id}
              className={
                'flex gap-x-3  p-1 overflow-hidden rounded-md bg-gray-900 border-2 border-gray-900 w-full duration-300 ease-linear hover:border-2 hover:border-[#ffd700]'
              }
            >
              <div className="flex flex-col">
                <div
                  className={
                    'flex justify-center text-sm text-[#ffd700] flex-1 items-center w-[50px] sm:text-xl sm:w-[80px]'
                  }
                >
                  <span>
                    <GiCurledLeaf size={20} />
                  </span>
                  <p className={' font-bold'}>{index + 1}</p>

                  <span
                    style={{
                      transform: 'scale(-1,1)',
                    }}
                  >
                    <GiCurledLeaf size={20} />
                  </span>
                </div>
                <div className="flex gap-x-1 text-sm text-[#ffd700] justify-center items-center sm:text-xl">
                  <span>
                    {' '}
                    <FaStar />
                  </span>
                  <span>{game.rating.toFixed(0)}</span>
                </div>
              </div>
              <div className="w-full">
                <CardHundred data={game} isPending={isPending} />
              </div>
            </Link>
          ) : (
            <SkeletonCardHundred />
          )}
        </>
      ))}
    </div>
  );
}
