import { instanceIGDB } from '@/api/axios';
import { GamesResponse } from '@/interface/games/interface-games';
import { SearchResponse } from '@/interface/interface-search';

export const QuerySearch = {
  async getSearchDropdown(value: string) {
    if (value) {
      const { data } = await instanceIGDB.post<GamesResponse>(
        '/igdb/games',
        `fields name ;limit 15; where name ~ "${value}"*;sort rating_count desc;`,
      );

      return data as GamesResponse;
    }
  },
  async getSearchResult(value: string | null, offset: number) {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields name,cover.*,genres.*,name; limit 20;offset ${offset}; where name ~ "${value}"*;sort rating_count desc; `,
    );
    return { data: data as GamesResponse, nextOffset: offset + 20 };
  },
};
