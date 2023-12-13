import { Video } from '@/interface/games/interface-games';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '@/app/client-pages/swiper/styles.css';
import { Navigation, Pagination } from 'swiper/modules';
import ReactPlayer from 'react-player/youtube';

import 'swiper/css/pagination';
interface IGameVideos {
  videos: Video[] | undefined;
}
export default function GameVideos({ videos }: IGameVideos) {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
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
            <ReactPlayer
              width="100%"
              controls={true}
              light={true}
              url={`https://www.youtube.com/watch?v=${video.video_id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
