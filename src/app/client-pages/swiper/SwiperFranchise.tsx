import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import '@/app/client-pages/swiper/styles.css';
import style from '@/app/client-pages/game/game-sections/game-images/style.module.scss';
import ImageCustom from '@/app/components/image/Image';

import { FranchiseSum } from '@/interface/games/interface-game-franchise';
import Link from 'next/link';
interface IGameFranchise {
  franchises: FranchiseSum | undefined;
}
export default function SwiperFranchise({ franchises }: IGameFranchise) {
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
        {franchises?.franchises?.map((franchise) =>
          franchise.games.map((fr) => (
            <SwiperSlide key={fr.id} className={style.slide}>
              <Link
                className={'w-full h-full cursor-pointer ease-in-out duration-300 hover:blur-sm '}
                href={`/game/${fr.id}`}
              >
                <ImageCustom
                  styleName={'rounded-lg '}
                  image_id={fr?.cover?.image_id}
                  size={'cover_big'}
                  ratio={26 / 37}
                  quality={100}
                />
              </Link>
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </div>
  );
}
