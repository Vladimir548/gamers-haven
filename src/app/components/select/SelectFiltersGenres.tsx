'use client';

import { useState } from 'react';
import { GenresResponse } from '@/interface/interface-genres';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import ArrowOpen from '@/app/components/arrow-open/ArrowOpen';
import { toggleGenres } from '@/app/redux/slice/filters/genres-slice';
import { FaCheck } from 'react-icons/fa';

interface ISelectFilters {
  title: string;
  content: GenresResponse | undefined;
  isLoading: boolean;
}
export default function SelectFiltersGenres({ title, content, isLoading }: ISelectFilters) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { genre } = useTypedSelector((state) => state.genres);
  return (
    <div>
      <div className="" onClick={() => setIsOpen((prev) => !prev)}>
        <button
          className={`bg-[#201a28] text-base font-bold w-full ${
            isOpen ? 'rounded-t-lg' : 'rounded-lg'
          }  flex justify-between p-3 items-center ease-linear duration-300 hover:bg-[#4c3862] `}
        >
          <span>{title}</span>
          <ArrowOpen isOpen={isOpen} />
        </button>
      </div>
      {isOpen && (
        <div className="bg-[#201a28]">
          {!isLoading ? (
            <form>
              {content?.map((item) => (
                <div
                  onClick={() => dispatch(toggleGenres(item.id))}
                  className={
                    ' bg-[#201a28] px-2 cursor-pointer border-b-1 border-white/10 flex items-center hover:bg-[#3e324e] '
                  }
                  key={item.id}
                >
                  <span className={'text-[#006fff] w-[25px] h-full]'}>
                    {genre.some((g) => g === item.id) && <FaCheck size={18} />}
                  </span>

                  <span className={'w-full p-2 h-full text-base overflow_line_one'}>
                    {item.name}
                  </span>
                </div>
              ))}
            </form>
          ) : (
            <p className={'flex justify-center py-2'}>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}
