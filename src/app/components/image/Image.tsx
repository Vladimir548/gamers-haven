'use client';
import NextImage from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React, { useState } from 'react';

interface IImage {
  image_id: string | undefined;
  size: string;
  styleName?: string;
  quality?: number;
  ratio: number;
}
export default function ImageCustom({ image_id, size, styleName, quality, ratio }: IImage) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <div className={'w-full h-full relative   flex-1'}>
      <AspectRatio.Root ratio={ratio}>
        <NextImage
          src={`https://images.igdb.com/igdb/image/upload/t_${size}/${image_id}.jpg`}
          quality={quality}
          fill
          alt={'image'}
          objectFit="cover"
          loading={'lazy'}
          className={`
              duration-700 object-cover relative  w-full h-full ${styleName} ease-in-out group-hover:opacity-75
              ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'})`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </AspectRatio.Root>
    </div>
  );
}
