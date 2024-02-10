'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdClear } from 'react-icons/md';
import React, { BaseSyntheticEvent, ChangeEvent, useEffect, useRef, useState } from 'react';
import SearchDropdown from '@/app/client-pages/search/search-dropdown/SearchDropdown';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import SearchResult from '@/app/client-pages/search/SearchResult';
import Games from '@/app/client-pages/games/Games';
import { RiSearchLine } from 'react-icons/ri';
import useDebounce from '@/app/hooks/useDebounce';

interface ISearch {
  value: string;
}
export default function Search() {
  const { register, handleSubmit, watch, reset, setValue, getValues } = useForm<ISearch>({
    mode: 'onSubmit',
  });
  const { push } = useRouter();
  const { selectValue } = useTypedSelector((state) => state.selectSearch);
  const inputRef = useRef<any>(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const queryValue = useSearchParams();
  useEffect(() => {
    setValue('value', selectValue);
    if ((queryValue.get('q') !== '' || null) && getValues('value').length === 0) {
      // @ts-ignore
      setValue('value', queryValue.get('q'));
    }
    if (queryValue.get('q') === '') {
      push(pathname);
    }
  }, [selectValue, setValue, push]);
  const onSubmit: SubmitHandler<ISearch> = (data) => {
    push(pathname + '?' + 'q=' + data.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && getValues('value').length >= 3) {
      e.preventDefault();
      push(pathname + '?' + 'q=' + getValues('value'));
      setIsActive(false);
    }
  };

  const onReset = () => {
    if (getValues('value')) {
      reset();
      push(pathname);
    }
  };
  const debounced = useDebounce(getValues('value'));
  return (
    <div>
      <form
        className="flex mx-1 justify-between items-center gap-x-2"
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full">
          <div ref={inputRef} className="">
            <input
              onClick={() => setIsActive(true)}
              type="text"
              autoComplete={'off'}
              placeholder={'Search...'}
              {...register('value', { required: true })}
              className={
                'w-full bg-gray-800 outline-0 rounded-lg h-[40px]  px-[40px] duration-300 ease-in-out focus:bg-gray-700'
              }
            />
          </div>
          <div className="absolute left-0 top-0 h-full w-[40px]  ">
            <span className={'flex justify-center items-center h-full'}>
              <RiSearchLine size={20} />
            </span>
          </div>
          {watch('value') && (
            <div
              className={`absolute right-0 border-l-[1px] border-white/40 h-full    rounded-r-lg  top-0 `}
            >
              <button
                className={'flex justify-center items-center h-full hover:bg-gray-900 px-2'}
                onClick={onReset}
              >
                <MdClear size={24} />
              </button>
            </div>
          )}
          <div className="">
            <SearchDropdown value={debounced} isActiveInput={isActive} inputRef={inputRef} />
          </div>
        </div>
        <div className="hidden md:flex">
          <button
            className={
              'h-[40px] bg-[#003aff] px-3 rounded-lg duration-300 ease-in-out hover:bg-blue-800'
            }
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-4">
        {queryValue.has('q') ? (
          <SearchResult />
        ) : (
          <p className={'text-xl flex justify-center items-center'}>Enter your request</p>
        )}
      </div>
    </div>
  );
}
