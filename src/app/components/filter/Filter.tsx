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

export default function Filter() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="bg-[#2f373f] rounded  p-2 ease-linear  duration-300 cursor-pointer hover:bg-[#394650] ">
          <SlEqualizer size={20} />
        </div>
      </SheetTrigger>
      <SheetContent
        className={
          'bg-[#191221] w-[280px] p-2 backdrop-blur top-[60px] overflow-y-auto h-full scroll'
        }
      >
        <SheetHeader>
          <SheetTitle className={'text-white'}>Filters</SheetTitle>
          <FilterList />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
