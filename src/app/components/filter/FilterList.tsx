'use client';

import FilterRating from '@/app/components/filters-box/FilterRating';
import FilterRatingCount from '@/app/components/filters-box/FilterRatingCount';
import FilterYear from '@/app/components/filters-box/FilterYear';
import FilterGenres from '@/app/components/filters-box/FilterGenres';
import FilterMode from '@/app/components/filters-box/FilterMode';
import FilterPlatforms from '@/app/components/filters-box/FilterPlatforms';
import FilterEngine from '@/app/components/filters-box/FilterEngine';
import FilterTheme from '@/app/components/filters-box/FilterTheme';

export default function FilterList() {
  return (
    <div className={'flex flex-col gap-y-3'}>
      <FilterRating />
      <FilterRatingCount />
      <FilterYear />
      <FilterGenres />
      <FilterMode />
      <FilterPlatforms />
      <FilterEngine />
      <FilterTheme />
    </div>
  );
}
