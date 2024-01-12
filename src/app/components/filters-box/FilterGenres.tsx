'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryFilters } from '@/app/query/query-filters';
import SelectFiltersGenres from '@/app/components/select/SelectFiltersGenres';

export default function FilterGenres() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-genres'],
    queryFn: () => QueryFilters.getGenres(),
  });
  return (
    <div>
      <SelectFiltersGenres title={'Genres'} content={data} isLoading={isLoading} />
    </div>
  );
}
