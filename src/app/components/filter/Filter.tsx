'use client';

import { SlEqualizer } from 'react-icons/sl';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/components/sheet/Sheet';
import FilterList from '@/app/components/filter/FilterList';
import * as React from 'react';

import BtnResetFilter from '@/app/components/filter/filter-btn/BtnResetFilter';
import BtnApplyFilter from '@/app/components/filter/filter-btn/BtnApplyFilter';

export default function Filter({ valueFilterSorting }: { valueFilterSorting: string }) {
  return (
    <Sheet>
      <div className="flex items-center gap-x-2">
        <h3 className={'hidden md:block'}>Filters</h3>
        <SheetTrigger>
          <div className="text-[#ab03ed] border-2 border-dark-violet rounded-lg   p-2 ease-linear  duration-300 cursor-pointer hover:bg-dark-violet/60 ">
            <SlEqualizer size={20} />
          </div>
        </SheetTrigger>
      </div>
      <SheetContent className={'bg-[#191221]  w-[280px] p-2 backdrop-blur  '}>
        <SheetHeader className={' h-[30px]'}>
          <SheetTitle
            className={'text-white  bg-[#1912214a] backdrop-blur-lg  flex justify-between'}
          >
            <span>Filters</span>
          </SheetTitle>
        </SheetHeader>
        <div className="overflow-y-scroll h-full scroll pb-[100px]">
          <FilterList />
        </div>

        <div className="fixed z-[90] rounded-t-lg left-0 flex justify-between gap-x-2 items-center p-2 bottom-0 w-full h-[60px] bg-[#1912214a] backdrop-blur-lg">
          <BtnApplyFilter valueFilterSorting={valueFilterSorting} />
          <BtnResetFilter />
        </div>
      </SheetContent>
    </Sheet>
  );
}
