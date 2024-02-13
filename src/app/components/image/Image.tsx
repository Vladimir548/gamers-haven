'use client';
import NextImage from 'next/image';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';

interface IImage {
  image_id: string | undefined;
  size: string;
  styleName?: string;
  quality?: number;
  ratio: number;
  isLoading?: boolean;
}
export default function ImageCustom({
  image_id,
  size,
  styleName,
  quality,
  ratio,
  isLoading,
}: IImage) {
  return (
    <div className={'w-full h-full relative   flex-1'}>
      <AspectRatio.Root ratio={ratio}>
        {!isLoading ? (
          <NextImage
            src={`https://images.igdb.com/igdb/image/upload/t_${size}/${image_id}.jpg`}
            quality={quality}
            fill
            alt={'image'}
            loading={'lazy'}
            className={`object-cover relative  w-full h-full ${styleName}`}
          />
        ) : (
          <Skeleton count={1} height={'100%'} baseColor={'#1f2937'} highlightColor={'#374151'} />
        )}
      </AspectRatio.Root>
    </div>
  );
}
