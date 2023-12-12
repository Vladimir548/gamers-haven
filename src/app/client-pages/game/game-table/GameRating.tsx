'use client';
import { CircularProgress, Card, CardBody, CardFooter, Chip } from '@nextui-org/react';
import cn from 'classnames';
import style from './style.module.scss';
interface IGameRating {
  rating: number | undefined;
  rating_count: number | undefined;
}
export default function GameRating({ rating, rating_count }: IGameRating) {
  return (
    <Card
      className={cn(
        'w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500',
        style.rating,
      )}
    >
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: 'w-36 h-36 drop-shadow-md',
            indicator: 'stroke-white',
            track: 'stroke-white/10',
            value: 'text-3xl font-semibold text-white',
          }}
          value={rating}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: 'border-1 border-white/30',
            content: 'text-white/90 text-small font-semibold',
          }}
          variant="bordered"
        >
          {rating_count} Data points
        </Chip>
      </CardFooter>
    </Card>
  );
}
