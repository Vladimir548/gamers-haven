'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryFilters } from '@/app/query/query-filters';
import SelectFiltersEngine from '@/app/components/select/SelectFiltersEngine';

export default function FilterEngine() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-engine'],
    queryFn: () => QueryFilters.getEngines(),
  });
  return (
    <div>
      <SelectFiltersEngine title={'Engine'} content={data} isLoading={isLoading} />
    </div>
  );
}
