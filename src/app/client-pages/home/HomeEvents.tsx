'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import Image from '@/app/components/image/Image';
import React, { useState } from 'react';
import Loading from '@/app/components/loading/Loading';
import Skeleton from 'react-loading-skeleton';

export default function HomeEvents() {
  const { data, isPending } = useQuery({
    queryKey: ['home-events'],
    queryFn: () => QueryHome.getEvents(),
  });

  const events = Array.from({ length: 8 });

  return (
    <>
      {!isPending ? (
        <>
          <h2 className={'title_sections'}>Events</h2>
          <div className={'grid  grid-cols-2  gap-2 md:grid-cols-4 '}>
            {data?.map((event) => (
              <div key={event.id} className="">
                <Image
                  image_id={event.event_logo?.image_id}
                  size={'screenshot_med'}
                  ratio={16 / 8}
                  styleName={'rounded-lg'}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Skeleton
            count={1}
            width={'40%'}
            containerClassName={'w-[inherit] pr-1 title_sections py-1'}
            baseColor={'#1f2937'}
            highlightColor={'#374151'}
          />
          <div className={'grid w-full  grid-cols-2  gap-2 md:grid-cols-4 '}>
            {events.map((_, index) => (
              <Skeleton
                key={index}
                count={1}
                width={'inherit'}
                height={'inherit'}
                containerClassName={'w-[inherit] h-full aspect-video'}
                baseColor={'#1f2937'}
                highlightColor={'#374151'}
                style={{
                  width: 'inherit',
                  height: '100%',
                }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
