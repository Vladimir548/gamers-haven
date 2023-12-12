import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { QueryGame } from '@/app/query/query-game';
import SwiperSimilar from '@/app/client-pages/swiper/SwiperSimilar';
import SwiperFranchise from '@/app/client-pages/swiper/SwiperFranchise';

export default function GameFranchise() {
  const params = useParams();
  const { data, isLoading, status } = useQuery({
    queryKey: ['get-id-game-franchise', params.id],
    queryFn: () => QueryGame.getGameFranchise(String(params!.id)),
    select: (data) => data[0],
  });
  return (
    <div>
      <SwiperFranchise franchises={data} />
    </div>
  );
}
