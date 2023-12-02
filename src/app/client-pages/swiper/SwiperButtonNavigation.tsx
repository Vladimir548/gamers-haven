'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function SwiperButtonNavigation({ swiperRef }: any) {
  return (
    <div className="hidden gap-x-2 md:flex">
      <button
        className={
          'cursor-pointer rounded-full bg-[#610dd9] p-1 ease-in-out duration-400 hover:bg-[#6702f8]'
        }
        onClick={() => swiperRef.current.slidePrev()}
      >
        <MdKeyboardArrowLeft size={28} />
      </button>
      <button
        className={
          'cursor-pointer rounded-full bg-[#610dd9] p-1 ease-in-out duration-400 hover:bg-[#6702f8]'
        }
        onClick={() => swiperRef.current.slideNext()}
      >
        <MdKeyboardArrowRight size={28} />
      </button>
    </div>
  );
}
