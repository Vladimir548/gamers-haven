import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
  DrawerTitle,
  DrawerHeader,
  DrawerClose,
} from '@/app/components/drawer/DrawerComponent';
import { SlEqualizer } from 'react-icons/sl';
import * as React from 'react';
import FilterList from '@/app/components/filter/FilterList';
import BtnApplyFilter from '@/app/components/filter/filter-btn/BtnApplyFilter';
import BtnResetFilter from '@/app/components/filter/filter-btn/BtnResetFilter';

export default function FilterDrawer({ valueFilterSorting }: { valueFilterSorting: string }) {
  return (
    <Drawer>
      <DrawerTrigger>
        {' '}
        <div className="text-[#ab03ed] border-2 border-dark-violet rounded-lg   p-2 ease-linear  duration-300 cursor-pointer hover:bg-dark-violet/60 ">
          <SlEqualizer size={20} />
        </div>
      </DrawerTrigger>
      <DrawerContent className={'bg-[#191221]  backdrop-blur-lg border-none z-[1000]  '}>
        <DrawerHeader>
          <span
            className={
              'w-[50px] h-[10px] rounded-lg bg-[#3f3f4f] absolute left-1/2 -translate-x-1/2 top-[10px]'
            }
          ></span>
          <DrawerTitle>Filters</DrawerTitle>
          <div className=" overflow-y-auto h-full">
            <FilterList />
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <div className="">
              <BtnApplyFilter valueFilterSorting={valueFilterSorting} />
            </div>
          </DrawerClose>
          <BtnResetFilter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
