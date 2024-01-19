import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function BtnApplyFilter({ valueFilterSorting }: { valueFilterSorting: string }) {
  const { push } = useRouter();
  const handlerFilterApply = () => {
    push(`/games?${valueFilterSorting}`);
  };
  return (
    <div className={'w-full'}>
      <button
        onClick={handlerFilterApply}
        className="cursor-pointer py-2 bg-blue-700 ease-in-out w-full h-full rounded-md duration-300 hover:bg-blue-900"
      >
        Apply
      </button>
    </div>
  );
}
