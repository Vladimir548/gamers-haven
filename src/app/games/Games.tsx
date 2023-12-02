'use client';
import { useQuery } from '@tanstack/react-query';
import { QueryGames } from '@/app/query/query-games';
import Image from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Card from '@/app/components/card/Card';
export default function Games() {
  const { data } = useQuery({ queryKey: ['games'], queryFn: QueryGames.getGames });

  return (
    <div className={'flex gap-2 flex-wrap'}>
      {data?.map((game) => (
        <div key={game.id} className={'flex'}>
          <Card
            image={game.artworks ? game?.artworks[0].image_id : ''}
            title={game.name}
            id={game.id}
          />
        </div>
      ))}
    </div>
  );
}
