'use client';

import { useQuery } from '@tanstack/react-query';

import { useParams } from 'next/navigation';
import style from './style.module.scss';
import ImageCustom from '@/app/components/image/Image';
import GameRating from './GameRating';
import { QueryGame } from '@/app/query/query-game';
import dynamic from 'next/dynamic';
import GameInformation from '@/app/client-pages/game/game-sections/game-info/GameInformation';

const DynamicGameGallery = dynamic(
  () => import('@/app/client-pages/game/game-sections/game-images/GameGallery'),
);
const DynamicGameFranchise = dynamic(
  () => import('@/app/client-pages/game/game-sections/game-franchise/GameFranchise'),
);
const DynamicGameSimilar = dynamic(
  () => import('@/app/client-pages/game/game-sections/game-similar/GameSimilar'),
);
export default function GamePageTable() {
  const params = useParams();

  const { data, isLoading, status } = useQuery({
    queryKey: ['get-id-game', params.id],
    queryFn: () => QueryGame.getGame(String(params!.id)),
    select: (data) => data[0],
  });
  const firstRelease = new Date(data?.first_release_date! * 1000).getFullYear();

  if (status === 'pending')
    return (
      <p className={'fixed left-0 top-0 w-full h-full bg-violet-900'}>
        <span className={'flex justify-center items-center'}>Loading</span>
      </p>
    );

  return (
    <div>
      <div className=" relative">
        <div className={style.backdrop_img}>
          <div className={' '}>
            <ImageCustom
              quality={20}
              image_id={data?.artworks && data.artworks[0].image_id}
              size={'1080p'}
              ratio={21 / 10}
            />
            <div className={style.top_content}>
              <div className={style.top_grid}>
                <div>
                  <ImageCustom
                    image_id={data?.cover?.image_id}
                    size={'cover_big'}
                    ratio={4 / 5}
                    quality={100}
                    styleName={'rounded-lg'}
                  />
                </div>
                <div className=" flex flex-col self-start">
                  <h1 className={style.title}>
                    {data?.name}({firstRelease}){' '}
                  </h1>
                  <div className="">
                    <div className="flex  gap-1">
                      {data?.genres?.map((genre) => (
                        <span className={style.game_types} key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-1">
                      {data?.platforms?.map((platform) => (
                        <span className={style.game_types} key={platform.id}>
                          {platform.abbreviation}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="my-2">
                  <GameRating rating={data?.rating} rating_count={data?.rating_count} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-1">
        <div className="rounded-md p-2 border-2 border-white/20">
          <h3 className={style.title_sections}>Overview</h3>
          <p className={'text-light-gray'}>{data?.storyline}</p>
        </div>
        <div className="w-full">
          <DynamicGameGallery />
        </div>
        {/*<div className="">*/}
        {/*  <GameInformation />*/}
        {/*</div>*/}
        <div className="rounded-md p-2 my-2 border-2 border-white/20">
          <h3 className={style.title_sections}>Franchise</h3>
          <DynamicGameFranchise />
        </div>
        <div className="rounded-md p-2 my-2 border-2 border-white/20">
          <h3 className={style.title_sections}>Similar</h3>
          <DynamicGameSimilar />
        </div>
      </div>
    </div>
  );
}
