'use client';
import * as Dialog from '@radix-ui/react-dialog';
import React, { useEffect, useState } from 'react';
import ImageCustom from '@/app/components/image/Image';
import { FaSearchPlus } from 'react-icons/fa';
import { artwork } from '@/interface/games/interface-games';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import style from '@/app/client-pages/game/game-sections/game-images/style.module.scss';
interface IModalImage {
  image: string | undefined;
  images: artwork[] | undefined;
  currentId: number | undefined;
}
export default function ModalImage({ image, images, currentId }: IModalImage) {
  const currentImages: number | undefined = images?.findIndex((image) => image.id === currentId);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<number | undefined>();
  useEffect(() => {
    setCurrent(currentImages);
  }, [currentImages, isOpen]);

  function openModal() {
    // Предложить пользователю изменить ориентацию на горизонтальную
    if (window.matchMedia('(orientation: portrait)').matches) {
      const confirmation = window.confirm(
        'Хотите изменить ориентацию на горизонтальную для просмотра изображения?',
      );
      if (!confirmation) {
        return; // Прерываем открытие модального окна, если пользователь не согласен на изменение ориентации
      }
    }
  }
  // useEffect(() => {
  //   function handleOrientationChange() {
  //     if (window.matchMedia("(orientation: portrait)").matches && isOpen) {
  //       const confirmation = window.confirm('Хотите изменить ориентацию на горизонтальную для просмотра изображения?');
  //       if (confirmation) {
  //         screen.orientation.lock('landscape').catch(err => console.error('Could not lock orientation: ', err));
  //       }
  //     }
  //   }
  //
  //   window.addEventListener('orientationchange', handleOrientationChange);
  //
  //   return () => {
  //     window.removeEventListener('orientationchange', handleOrientationChange);
  //   };
  // }, [isOpen]);

  const plusIndex = () => {
    // @ts-ignore
    if (current >= images?.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current! + 1);
    }
  };
  const minusIndex = () => {
    if (current! <= 0) {
      setCurrent(images?.length! - 1);
    } else {
      setCurrent(current! - 1);
    }
  };

  return (
    <div>
      <Dialog.Root open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <Dialog.Trigger asChild>
          <div className={style.increase}>
            <FaSearchPlus size={48} />
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 backdrop-blur data-[state=open]:animate-overlayShow fixed z-[1000] inset-0" />
          <Dialog.Content
            className="data-[state=open]:animate-contentShow fixed top-[10px] z-[1001] left-[50%] max-h-[90%] w-[90%]  max-w-full translate-x-[-50%]  rounded-[6px]
           bg-black  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
          >
            <div className={'relative'}>
              <ImageCustom
                styleName={'rounded-lg'}
                image_id={images![current!]?.image_id || image}
                quality={100}
                size={'1080p'}
                ratio={16 / 9}
              />
              <button
                className="absolute left-[0px] w-[60px] h-[60px]   bg-black/80 flex justify-center items-center  cursor-pointer backdrop-blur rounded-lg top-1/2 translate-y-[-50%] z-[1002] md:left-[-50px]"
                onClick={() => minusIndex()}
              >
                <span className={'  '}>
                  <SlArrowLeft size={24} />
                </span>
              </button>
              <button
                className="absolute w-[60px] h-[60px] bg-black/80 flex justify-center items-center backdrop-blur rounded-lg cursor-pointer right-0 top-1/2 translate-y-[-50%]  z-[1002] md:right-[-50px]"
                onClick={() => plusIndex()}
              >
                <span className={' '}>
                  <SlArrowRight size={24} />
                </span>
              </button>{' '}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
