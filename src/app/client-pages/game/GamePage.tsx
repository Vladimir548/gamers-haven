'use client';

import GamePageTable from '@/app/client-pages/game/game-table/GamePageTable';
import GamePageMobile from '@/app/client-pages/game/game-mobile/GamePageMobile';

export default function GamePage() {
  return (
    <div>
      <div className="hidden md:block">
        <GamePageTable />
      </div>
      <div className="block md:hidden">
        <GamePageMobile />
      </div>
    </div>
  );
}
