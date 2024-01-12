'use client';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function ArrowOpen({ isOpen }: { isOpen: boolean }) {
  return (
    <span>
      {isOpen ? (
        <span className={'text-[#4d4c4e]'}>
          <MdKeyboardArrowUp size={24} />
        </span>
      ) : (
        <MdKeyboardArrowDown size={24} />
      )}
    </span>
  );
}
