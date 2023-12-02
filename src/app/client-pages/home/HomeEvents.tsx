'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';
import Image from '@/app/components/image/Image';
import { useState } from 'react';

export default function HomeEvents() {
  const { data } = useQuery({ queryKey: ['home-events'], queryFn: () => QueryHome.getEvents() });
  return (
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
  );
}
