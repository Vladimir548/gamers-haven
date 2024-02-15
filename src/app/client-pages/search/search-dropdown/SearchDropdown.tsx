import { useQuery } from '@tanstack/react-query';
import { QuerySearch } from '@/app/query/query-search';
import { useDispatch } from 'react-redux';
import { getSelectValue } from '@/app/redux/slice/select-search-slice';
import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { usePathname, useRouter } from 'next/navigation';

export default function SearchDropdown({
  value,
  isActiveInput,
  setIsActiveInput,
  inputRef,
}: {
  value: string;
  isActiveInput: boolean;
  setIsActiveInput: (val: boolean) => void;
  inputRef: any;
}) {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => QuerySearch.getSearchDropdown(value),
    queryKey: ['dropdown-search', value],
  });
  const { push } = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [isActiveValue, setIsActiveValue] = useState(false);
  useEffect(() => {
    if (value?.length >= 3) {
      setIsActiveValue(true);
    } else {
      setIsActiveValue(false);
    }
  }, [isActiveValue, value]);
  const dispatch = useDispatch();
  const handleValue = (value: string) => {
    dispatch(getSelectValue(value));
    push(pathname + '?' + 'q=' + value);
    setIsActiveInput(false);
  };
  const dropdownRef = useRef<any>(null);
  const handleCloseSelect = (e: any) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      inputRef.current &&
      !inputRef.current.contains(e.target)
    ) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseSelect);
    return () => {
      document.removeEventListener('mousedown', handleCloseSelect);
    };
  }, [handleCloseSelect]);

  return (
    <div ref={dropdownRef}>
      {isActive && isActiveValue && isActiveInput && (
        <div
          className={
            'absolute left-0 top-full mt-0.5 p-1 z-50 rounded-lg outline-0 bg-gray-800/60 backdrop-blur-lg  w-full h-[300px] overflow-y-auto scroll_gray  overflow-hidden '
          }
        >
          {data?.map((game) => game).length !== 0 ? (
            <>
              {!isLoading ? (
                <>
                  {data?.map((game) => (
                    <>
                      <div
                        onClick={() => handleValue(game.name)}
                        className={
                          'rounded-md py-1 px-1 cursor-pointer selection:bg-violet-400 hover:bg-gray-700'
                        }
                        key={game.id}
                      >
                        <></>
                        {game.name}
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <Skeleton
                  count={10}
                  baseColor={'#374151'}
                  highlightColor={'#111827'}
                  className={' h-[32px]'}
                />
              )}
            </>
          ) : (
            <p className={'flex justify-center items-center'}>Nothing found</p>
          )}
        </div>
      )}
    </div>
  );
}
