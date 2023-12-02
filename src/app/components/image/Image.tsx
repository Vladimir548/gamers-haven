'use client';
import NextImage from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

interface IImage {
  image_id: string | undefined;
  size: string;
  styleName?: string;
  quality?: number;
  ratio: number;
}
export default function ImageCustom({ image_id, size, styleName, quality, ratio }: IImage) {
  return (
    <div className={'w-full  flex-1'}>
      <AspectRatio.Root ratio={ratio}>
        <NextImage
          src={`https://images.igdb.com/igdb/image/upload/t_${size}/${image_id}.jpg`}
          fill={true}
          sizes={'100vw'}
          quality={quality}
          alt={'image'}
          className={`object-cover w-full h-full ${styleName}`}
        />
      </AspectRatio.Root>
    </div>
  );
}
