'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';

export default function HomeGenres() {
  const { data } = useQuery({ queryKey: ['home-genres'], queryFn: () => QueryHome.getGenres() });
  return (
    <>
      <h3 className={'title'}>Genres</h3>
      <div className={'flex flex-wrap gap-2 '}>
        {data?.map((genre) => (
          <span
            className={
              ' flex flex-wrap title_card bg-slate-500 justify-center p-1 text-center items-center rounded-lg w-[150px] h-[130px]  backdrop-blur' +
              ' shadow_custom hover:bg-slate-700'
            }
            key={genre.id}
          >
            {genre.name}
          </span>
        ))}
      </div>
    </>
  );
}
