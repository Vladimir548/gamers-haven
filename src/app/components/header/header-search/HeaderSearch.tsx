'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { CiSearch } from 'react-icons/ci';
import HeaderDropdown from '@/app/components/header/header-search/HeaderDropdown';
import useDebounce from '@/app/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { QueryHome } from '@/app/query/query-home';

export default function HeaderSearch() {
  const [isValue, setIsValue] = useState<string>('');
  const debounce = useDebounce(isValue);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  const { data } = useQuery({
    queryKey: ['header-search', debounce],
    queryFn: () => QueryHome.getSearch(debounce),
  });
  return (
    <div className={'relative '}>
      <div ref={dropdownRef} onClick={(e) => handleClickOutside(e)} className="">
        <input
          onClick={() => setIsOpen(true)}
          className={style.input}
          type="text"
          value={isValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setIsValue(e.target.value)}
          placeholder={'Search...'}
        />

        <div className="absolute top-0 right-0 ">
          <button
            className={
              'flex justify-center items-center bg-transparent  rounded-r-lg border-l-2 border-white/30 w-[30px] h-[40px]  ease-in-out duration-300 hover:bg-violet-700'
            }
            type={'submit'}
          >
            <CiSearch size={20} />{' '}
          </button>
        </div>

        <div>
          <HeaderDropdown value={isValue} isOpen={isOpen} setIsOpen={setIsOpen} data={data!} />
        </div>
      </div>
    </div>
  );
}
