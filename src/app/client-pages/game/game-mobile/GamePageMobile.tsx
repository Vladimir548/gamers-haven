'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { QueryGame } from '@/app/query/query-game';
import style from './style.module.scss';
import ImageCustom from '@/app/components/image/Image';
import dynamic from 'next/dynamic';
// import { getPalette } from '@/app/get-pallete/getPalette';
import { useEffect, useState } from 'react';
const DynamicGameGallery = dynamic(
  () => import('@/app/client-pages/game/game-sections/game-images/GameGallery'),
);
const DynamicGameFranchise = dynamic(
  () => import('@/app/client-pages/game/game-sections/game-franchise/GameFranchise'),
);
const DynamicGameSimilar = dynamic(
  () => import('@/app/client-pages/game/game-sections/game-similar/GameSimilar'),
);

export default function GamePageMobile() {
  const params = useParams();

  const { data, isLoading, status } = useQuery({
    queryKey: ['get-id-game', params.id],
    queryFn: () => QueryGame.getGame(String(params!.id)),
    select: (data) => data[0],
  });
  const [isColorImg, setIsColorImg] = useState<any>();

  const getImg = `https://images.igdb.com/igdb/image/upload/t_thumb/${
    data?.artworks ? data?.artworks[0]?.image_id : ''
  }.jpg`;
  // useEffect(() => {
  //   getPalette(getImg).then((colorImg) => setIsColorImg(colorImg));
  // }, [getImg]);

  const firstRelease = new Date(data?.first_release_date! * 1000).getFullYear();
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${getImg})`,
          // backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div
          className={'relative'}
          style={{
            boxShadow: `0px 0px 40px 0px rgb(${isColorImg ? isColorImg[0].join(',') : ''})`,
          }}
        >
          <div className={style.backdrop_img}>
            <ImageCustom
              quality={20}
              image_id={data?.artworks && data.artworks[0].image_id}
              size={'thumb'}
              ratio={4 / 4}
            />
          </div>
          <div className=" absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
            <div className="w-[65vw]">
              <ImageCustom
                image_id={data?.cover?.image_id}
                size={'720p'}
                ratio={4 / 5}
                quality={100}
                styleName={'rounded-lg'}
              />
            </div>
          </div>
        </div>
        <div className={'bg-black/60 backdrop-blur-[80px] py-1'}>
          <div className={'  px-1'}>
            <div
              className={
                'rounded-md p-2 border-2  bg-black/30 backdrop-blur-[20px] border-white/20 '
              }
            >
              <div className=" flex flex-col  self-start">
                <h1 className={style.title}>{data?.name}</h1>
                <div className="flex gap-x-2 flex-wrap">
                  <div className={style.game_types}>
                    {new Date(data?.first_release_date! * 1000)
                      .toLocaleDateString()
                      .split('.')
                      .at(-1)}
                  </div>
                  <div className="flex flex-wrap ">
                    {data?.genres?.map((genre) => (
                      <span className={style.game_types} key={genre.id}>
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {data?.platforms?.map((platform) => (
                      <span className={style.game_types} key={platform.id}>
                        {platform.abbreviation}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-1 px-1 ">
            <div className="rounded-md p-2 border-2  bg-black/30 backdrop-blur-[20px] border-white/20">
              <h3 className={style.title_sections}>Overview</h3>
              <p className={'text-light-gray'}>{data?.storyline || data?.summary}</p>
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
      </div>
    </div>
  );
}
