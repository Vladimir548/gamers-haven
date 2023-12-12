import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ImageCustom from '@/app/components/image/Image';
import { screenshot } from '@/interface/games/interface-games';
import '@/app/client-pages/swiper/styles.css';
import style from './style.module.scss';
import ModalImage from '@/app/components/modal-image/ModalImage';
import { useState } from 'react';
interface IGameScreenshot {
  screenshots: screenshot[] | undefined;
}
export default function GameScreenshots({ screenshots }: IGameScreenshot) {
  const [currentId, setCurrentId] = useState<number>();
  const [currentImageId, setCurrentImageId] = useState<string>();

  const getInfoImage = (image_id: string, id: number) => {
    setCurrentImageId(image_id);
    setCurrentId(id);
  };
  return (
    <div>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper "
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {screenshots?.map((screenshot) => (
            <SwiperSlide
              key={screenshot.id}
              className={style.slide}
              onClick={() => getInfoImage(screenshot.image_id, screenshot.id)}
            >
              <ImageCustom
                image_id={screenshot.image_id}
                size={'720p'}
                ratio={18 / 9}
                quality={100}
                styleName={'rounded-lg'}
              />
              <div className={style.increase}>
                <ModalImage image={currentImageId} images={screenshots} currentId={currentId} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
