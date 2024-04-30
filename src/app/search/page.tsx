import Search from '@/app/client-pages/search/Search';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <Suspense fallback={'Loading...'}>
        <Search />
      </Suspense>
    </div>
  );
}
