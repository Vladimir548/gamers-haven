import Skeleton from 'react-loading-skeleton';

export const SkeletonCardOne = () => {
  return (
    <div className={'rounded-lg flex gap-x-2'}>
      <div className="w-1/2">
        <Skeleton className={'w-full h-full rounded-lg'} />
      </div>
      <div className="w-1/2">
        <h3 className={'w-full'}>
          <Skeleton count={1} />
        </h3>
        <p className={'w-full'}>
          <Skeleton count={3} />
        </p>
        <div className="flex justify-between items-center">
          <span className={'w-1/2'}>
            <Skeleton count={1} />
          </span>
          <span className={'w-1/2'}>
            <Skeleton count={1} />
          </span>
        </div>
      </div>
    </div>
  );
};
