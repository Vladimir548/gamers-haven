'use client';

import { useQuery } from '@tanstack/react-query';
import { QueryFilters } from '@/app/query/query-filters';
import SelectFiltersPlatforms from '@/app/components/select/SelectFiltersPlatforms';
export default function FilterPlatforms() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-platforms'],
    queryFn: () => QueryFilters.getPlatforms(),
  });
  return (
    <div>
      <SelectFiltersPlatforms title={'Platforms'} isLoading={isLoading} content={data} />
    </div>
  );
}
