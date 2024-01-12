'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryFilters } from '@/app/query/query-filters';

import SelectFiltersTheme from '@/app/components/select/SelectFiltersTheme';

export default function FilterTheme() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-theme'],
    queryFn: () => QueryFilters.getTheme(),
  });
  return (
    <div>
      <SelectFiltersTheme title={'Themes'} content={data} isLoading={isLoading} />
    </div>
  );
}
