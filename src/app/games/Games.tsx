'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryGames } from '@/app/query/query-games';

import Card from '@/app/components/card/Card';
import SelectSort from '@/app/components/select/SelectSort';
import Filter from '@/app/components/filter/Filter';
export default function Games() {
  const { data } = useQuery({ queryKey: ['games'], queryFn: QueryGames.getGames });

  return (
    <>
      <div className="my-3  flex justify-between p-2 border-b-1 border-white/50">
        <div className="">
          <SelectSort />
        </div>
        <div className={''}>
          <Filter />
        </div>
      </div>
      <div className={'flex mx-2 justify-between gap-3 flex-wrap mt-2 '}>
        {data?.map((game) => (
          <div key={game.id} className={'flex w-[214px]'}>
            <Card
              name={game.name}
              id={game.id}
              // @ts-ignore
              genres={game?.genres[0]?.name}
              poster={game.cover?.image_id}
              rating={game.rating | game.total_rating}
              releaseYear={game.first_release_date}
            />
          </div>
        ))}
      </div>
    </>
  );
}
