'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryGame } from '@/app/query/query-game';
import { useParams } from 'next/navigation';
import * as Tabs from '@radix-ui/react-tabs';
import GameVideos from '@/app/client-pages/game/game-sections/game-images/GameVideos';
import GameArtworks from '@/app/client-pages/game/game-sections/game-images/GameArtworks';
import GameScreenshots from '@/app/client-pages/game/game-sections/game-images/GameScreenshots';
export default function GameGallery() {
  const params = useParams();
  const { data, isLoading, status } = useQuery({
    queryKey: ['get-id-game-images', params.id],
    queryFn: () => QueryGame.getGameImages(String(params!.id)),
    select: (data) => data[0],
  });
  return (
    <div>
      <Tabs.Root className="flex flex-col  " defaultValue="tab1">
        <Tabs.List
          className=" w-max flex  my-2 gap-x-1 p-1 border-[2px] border-white/20 rounded-lg  ls:gap-x-2 ls:p-2 "
          aria-label="Trailers and images"
        >
          <Tabs.Trigger
            className="bg-violet-900  h-[45px]   rounded-md   cursor-pointer flex items-center justify-center
            leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-md
            hover:bg-blue-600 data-[state=active]:text-violet11 data-[state=active]:bg-violet-700
            data-[state=active]:focus:relative data-[state=active]:focus:border-b-2 border-b-fuchsia-600
            data-[state=active]:focus:shadow-black outline-none ms:text-[12px] px-2 ls:text-[15px] px-5 "
            value="tab1"
          >
            Trailers
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-violet-900  h-[45px]   rounded-md   cursor-pointer flex items-center justify-center
            leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-md
            hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-violet-700
            data-[state=active]:focus:relative data-[state=active]:focus:border-b-2 border-b-fuchsia-600
            data-[state=active]:focus:shadow-black outline-none ms:text-[12px] px-2 ls:text-[15px] px-5 "
            value="tab2"
          >
            Artworks
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-violet-900  h-[45px]   rounded-md   cursor-pointer flex items-center justify-center
            leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-md
            hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:bg-violet-700
            data-[state=active]:focus:relative data-[state=active]:focus:border-b-2 border-b-fuchsia-600
            data-[state=active]:focus:shadow-black outline-none ms:text-[12px] px-2 ls:text-[15px] px-5 "
            value="tab3"
          >
            Screenshots
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" className={'w-full'}>
          <GameVideos videos={data?.videos} />
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <GameArtworks artworks={data?.artworks} />
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <GameScreenshots screenshots={data?.screenshots} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
