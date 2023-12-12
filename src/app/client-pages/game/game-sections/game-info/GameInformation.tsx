import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { QueryGame } from '@/app/query/query-game';
import style from './style.module.scss';
export default function GameInformation() {
  const params = useParams();
  const { data, isLoading, status } = useQuery({
    queryKey: ['get-id-game-info', params.id],
    queryFn: () => QueryGame.getGameInfo(String(params!.id)),
    select: (data) => data[0],
  });
  return (
    <div>
      <div className={style.wrapper}>
        <div className="">Release dates</div>
        <div className="">
          {data?.release_dates.map((date) => (
            <span className={'flex gap-x-2'} key={date.id}>
              <div className=" flex gap-x-2 items-center">
                <span>{date.platform.abbreviation}</span>
                <span>{date.human}</span>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
