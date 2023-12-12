import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import '@/app/client-pages/swiper/styles.css';
import style from '@/app/client-pages/game/game-sections/game-images/style.module.scss';
import ImageCustom from '@/app/components/image/Image';

import { SimilarGame } from '@/interface/interface-game-similar';
import Link from 'next/link';

interface IGameSimilar {
  similars: SimilarGame[] | undefined;
}
export default function SwiperSimilar({ similars }: IGameSimilar) {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
        slidesPerView={6}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 4,
          },
          425: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {similars?.map((similar) => (
          <SwiperSlide key={similar.id} className={style.slide}>
            <Link
              className={'w-full h-full cursor-pointer ease-in-out duration-300 hover:blur-sm'}
              href={`/game/${similar.id}`}
            >
              <ImageCustom
                styleName={'rounded-lg'}
                image_id={similar?.cover?.image_id}
                size={'cover_big'}
                ratio={26 / 37}
                quality={100}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
