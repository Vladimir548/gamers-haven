'use client';

import NavigationBottomMenu from './NavigationBottomMenu';
import { ROUTESBOTTOM } from '@/data/data-routes-navigation';

export default function NavigationBottom() {
  return (
    <div
      className={
        'fixed bottom-0 block left-0 w-full bg-primary/80 backdrop-blur h-[50px] z-[500] md:hidden '
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
