'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryFilters } from '@/app/query/query-filters';
import SelectFiltersEngine from '@/app/components/select/SelectFiltersEngine';
import SelectFiltersMode from '@/app/components/select/SelectFiltersMode';

export default function FilterMode() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-modes'],
    queryFn: () => QueryFilters.getModes(),
  });
  return (
    <div>
      <SelectFiltersMode title={'Mode'} content={data} isLoading={isLoading} />
    </div>
  );
}
