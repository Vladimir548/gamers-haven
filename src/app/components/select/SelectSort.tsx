'use client';
import * as Select from '@radix-ui/react-select';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import cn from 'classnames';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { DATASORTGAMES } from '@/app/data/data-sort-games';
import { SelectItemProps } from '@radix-ui/react-select';

export default function SelectSort() {
  return (
    <div className={'flex items-center gap-x-2'}>
      <span>Sort by</span>
      <Select.Root defaultValue={'rating-asc'}>
        <Select.Trigger
          className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-[#2f373f] text-whitr  hover:bg-[#394650] focus:shadow-[255_255_255_6px] focus:shadow-white data-[placeholder]:text-white outline-none"
          aria-label="Sort"
        >
          <Select.Value placeholder="Select a sort…" />
          <Select.Icon className="text-white">
            <IoIosArrowDown />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position={'popper'}
            align={'center'}
            side={'bottom'}
            sideOffset={5}
            className="overflow-hidden bg-[#2f373f] text-white  rounded-md"
          >
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-white cursor-pointer">
              <IoIosArrowUp />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                {DATASORTGAMES.map((sort) => (
                  <SelectItem
                    key={sort.id}
                    className={'border-b-1 border-white hover:bg-dark-violet'}
                    value={sort.value}
                  >
                    {sort.name}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <IoIosArrowDown />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: { children: React.ReactNode; className: string },
    forwardedRef: React.ForwardedRef<SelectItemProps>,
  ) => {
    return (
      <Select.Item
        className={cn(
          'text-[13px] cursor-pointer leading-none text-white rounded-[3px] flex items-center h-[35px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText className={'border-b-1 border-white'}>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute  left-0 w-[25px] inline-flex items-center justify-center">
          <FaCheck />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);
