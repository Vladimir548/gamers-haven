'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import ArrowOpen from '@/app/components/arrow-open/ArrowOpen';

import { GameMode } from '@/interface/interface-game-info';
import { toggleModes } from '@/app/redux/slice/filters/modes-slice';

interface ISelectFilters {
  title: string;
  content: GameMode[] | undefined;
  isLoading: boolean;
}
export default function SelectFiltersMode({ title, content, isLoading }: ISelectFilters) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { mode } = useTypedSelector((state) => state.modes);
  return (
    <div>
      <div className="" onClick={() => setIsOpen((prev) => !prev)}>
        <button
          className={`bg-[#201a28] text-base font-bold w-full ${
            isOpen ? 'rounded-t-lg' : 'rounded-lg'
          }  flex justify-between p-3 items-center ease-linear duration-300 hover:bg-[#4c3862]`}
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
                  onClick={() => dispatch(toggleModes(item.name))}
                  className={
                    ' bg-[#201a28] px-2 cursor-pointer border-b-1 border-white/10 flex items-center hover:bg-[#3e324e] '
                  }
                  key={item.id}
                >
                  <input
                    id={item.name}
                    type="checkbox"
                    defaultChecked={mode.some((m) => m === item.name)}
                  />
                  <label
                    className={'w-full p-2 h-full text-base overflow_line_one'}
                    htmlFor={item.name}
                  >
                    {item.name}
                  </label>
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
