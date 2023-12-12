import { Video } from '@/interface/games/interface-games';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/client-pages/swiper/styles.css';
import { Navigation } from 'swiper/modules';
interface IGameVideos {
  videos: Video[] | undefined;
}
export default function GameVideos({ videos }: IGameVideos) {
  return (
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
        {videos?.map((video) => (
          <SwiperSlide key={video.id}>
            <iframe
              className={'max-w-full'}
              id="ytplayer"
              width="100%"
              height="100%"
              src={`http://www.youtube.com/embed/${video.video_id}?showinfo=0&modestbranding=1&rel=0&allowfullscreen="0"`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
