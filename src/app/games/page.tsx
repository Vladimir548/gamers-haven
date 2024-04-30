import Games from '@/app/client-pages/games/Games';
import { Suspense } from 'react';

export default async function PageGames() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Games />
      </Suspense>
    </div>
  );
}
