import { InfiniteData } from '@tanstack/react-query';
import { GamesResponse } from '@/interface/games/interface-games';
import ImageCustom from '@/app/components/image/Image';
import style from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { CiStar } from 'react-icons/ci';
interface ICard {
  data: InfiniteData<{ data: GamesResponse; nextOffset: number }> | undefined;
}
export default function CardTwo({ data }: ICard) {
  return (
    <div className={style.container}>
      {data?.pages?.map((data) =>
        data.data.map((game) => (
          <div key={game.id} className={'flex min-w-full rounded-lg h-full '}>
            <div className={'flex relative w-full  '}>
              <Link
                href={`/game/${game.id}`}
                className="flex  flex-col p-1 w-full items-stretch bg-primary rounded-md shadow-[0_0_4px_0_rgb(68,68,68)] ease-linear duration-300 overflow-hidden hover:bg-dark-violet"
              >
                <div className="flex  gap-x-2">
                  <div className="w-1/2 relative">
                    <div className="absolute  left-0 top-0 w-full h-full blur-[10px]">
                      <ImageCustom
                        image_id={game.artworks && game.artworks[0]?.image_id}
                        size={'micro'}
                        ratio={1 / 1.3}
                        quality={1}
                      />
                    </div>
                    <ImageCustom
                      image_id={game.artworks && game?.artworks[0].image_id}
                      size={'screenshot_big'}
                      ratio={16 / 9}
                      styleName={'rounded-lg'}
                    />
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <h2 className={cn('overflow_line_one min-w-full font-bold', style.title)}>
                      {game.name}
                    </h2>
                    <p
                      className={cn(
                        'text-gray-400 text-sm overflow_line_three flex flex-1',
                        style.summary,
                      )}
                    >
                      {game.summary}
                    </p>
                    <div
                      className={cn(
                        'flex justify-between text-default-100  items-end text-sm  gap-x-2 border-t-1 border-white/30 ',
                        style.info,
                      )}
                    >
                      <div>
                        {game.genres ? (
                          <span className={'overflow_line_one'}>{game.genres[0].name}</span>
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="flex items-center gap-x-1">
                        <span>
                          <CiStar size={18} />
                        </span>
                        <span>{Number(game.rating).toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )),
      )}
    </div>
  );
}
