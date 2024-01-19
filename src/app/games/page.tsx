import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { QueryGames } from '@/app/query/query-games';
import Games from '@/app/client-pages/games/Games';

export default async function PageGames() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['games'],
    // @ts-ignore
    queryFn: QueryGames.getGames,
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Games />
      </HydrationBoundary>
    </div>
  );
}
