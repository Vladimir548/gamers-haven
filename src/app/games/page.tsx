import Games from '@/app/games/Games';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { QueryGames } from '@/app/query/query-games';

export default async function PageGames() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['games'],
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
