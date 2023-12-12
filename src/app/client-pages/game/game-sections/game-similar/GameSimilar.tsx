import { useQuery } from '@tanstack/react-query';
import { QueryGame } from '@/app/query/query-game';
import { useParams } from 'next/navigation';
import SwiperSimilar from '@/app/client-pages/swiper/SwiperSimilar';

export default function GameSimilar() {
  const params = useParams();
  const { data, isLoading, status } = useQuery({
    queryKey: ['get-id-game-similar', params.id],
    queryFn: () => QueryGame.getGameSimilar(String(params!.id)),
    select: (data) => data[0],
  });
  return (
    <div>
      <SwiperSimilar similars={data?.similar_games} />
    </div>
  );
}
