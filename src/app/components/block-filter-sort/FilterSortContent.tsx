'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SortingGame from '@/app/components/select/SortingGame';
import Filter from '@/app/components/filter/Filter';
interface ISortFilter {
  urlParams: URLSearchParams;
}
export default function FilterSortContent({ urlParams }: ISortFilter) {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [60, 100], ['#0e1820', 'rgba(14, 24, 32,0.8)']);
  const backdropFilter = useTransform(scrollY, [60, 100], ['blur(3)', 'blur(8px)']);
  const position = useTransform(scrollY, [60, 100], ['relative', 'sticky']);
  return (
    <motion.div
      style={{ position, background, backdropFilter }}
      className=" z-[999] left-0 top-[0px] bg-primary w-full"
    >
      <div className="mb-1   items-center    flex justify-between p-2 border-b-1 border-white/50">
        <div>
          <SortingGame filterParam={urlParams} />
        </div>
        <div className={''}>
          <Filter valueFilterSorting={urlParams.toString()} />
        </div>
      </div>
    </motion.div>
  );
}
