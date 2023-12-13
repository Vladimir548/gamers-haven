'use client';

import { ROUTESBOTTOM } from '@/app/data/data-routes-navigation';
import NavigationBottomMenu from './NavigationBottomMenu';

export default function NavigationBottom() {
  return (
    <div
      className={
        'fixed bottom-0 block left-0 w-full bg-black/40 backdrop-blur h-[50px] z-[500] md:hidden '
      }
    >
      <div className="flex flex-1 w-full h-full">
        {ROUTESBOTTOM.map((route) => (
          <NavigationBottomMenu key={route.id} {...route} />
        ))}
      </div>
    </div>
  );
}
