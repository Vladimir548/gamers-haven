import { artwork } from '@/interface/games/interface-games';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/client-pages/swiper/styles.css';
import { Navigation } from 'swiper/modules';
import ImageCustom from '@/app/components/image/Image';
import ModalImage from '@/app/components/modal-image/ModalImage';
import style from './style.module.scss';
import { useState } from 'react';
interface IGameArtwork {
  artworks: artwork[] | undefined;
}
export default function GameArtworks({ artworks }: IGameArtwork) {
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
          {artworks?.map((artwork) => (
            <SwiperSlide
              key={artwork.id}
              className={style.slide}
              onClick={() => getInfoImage(artwork.image_id, artwork.id)}
            >
              <ImageCustom
                styleName={'rounded-lg'}
                image_id={artwork.image_id}
                size={'720p'}
                ratio={18 / 10}
                quality={100}
              />
              <div>
                <ModalImage image={currentImageId} images={artworks} currentId={currentId} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
