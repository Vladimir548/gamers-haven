import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './SelectSort';
import { DATASORTGAMES } from '@/app/data/data-sort-games';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getSort } from '@/app/redux/slice/sort-game-slice';
import { usePathname, useRouter } from 'next/navigation';

export default function SortingGame({ filterParam }: { filterParam: URLSearchParams }) {
  const { sort } = useTypedSelector((state) => state.sortGame);
  const dispatch = useDispatch();

  const { push } = useRouter();
  // const  pathname =usePathname()

  const handlerValue = (value: string) => {
    const newFilterParam = filterParam
      ? new URLSearchParams(filterParam.toString())
      : new URLSearchParams();
    newFilterParam.set('sort', value);
    dispatch(getSort(value));
    push(`/games?${newFilterParam.toString()}`);
  };

  return (
    <Select defaultValue={sort} value={sort} onValueChange={(value: string) => handlerValue(value)}>
      <div className="flex items-center w-full gap-x-2">
        <h3 className={'w-full hidden md:block'}>Sort by</h3>
        <SelectTrigger className="w-[200px] border-dark-violet">
          <SelectValue placeholder="Sorting game" />
        </SelectTrigger>
      </div>
      <SelectContent className={'border-dark-violet bg-primary/50'}>
        {DATASORTGAMES.map((val) => (
          <SelectItem
            className={'ease-in-out duration-300 cursor-pointer rounded-lg hover:bg-dark-violet'}
            key={val.id}
            value={val.value}
          >
            {val.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
