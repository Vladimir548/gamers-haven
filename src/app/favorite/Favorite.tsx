'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryFavorite } from '@/app/query/query-favorite';
export default function Favorite() {
  const { data } = useQuery({
    queryKey: ['get-favorite'],
    queryFn: () => QueryFavorite.getFavorite(),
  });
  return <div>{data?.map((game) => <div key={game.id}>{game.gameTitle}</div>)}</div>;
}
