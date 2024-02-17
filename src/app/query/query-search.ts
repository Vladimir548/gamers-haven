import { instanceIGDB } from '@/api/axios';
import { GamesResponse } from '@/interface/games/interface-games';
import { SearchResponse } from '@/interface/interface-search';
const currentDate = Math.floor(Date.now() / 1000);
const lastMonthDate = currentDate - 5 * 30 * 24 * 60 * 60;
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
      `fields name,cover.*,genres.*,name,rating; limit 20;offset ${offset}; where name ~ "${value}"*;sort rating_count desc; `,
    );
    return { data: data as GamesResponse, nextOffset: offset + 20 };
  },
  async getPopularSearch(limit: number, offset: number) {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields name,cover.*,  slug,summary ,genres.name,artworks.*,platforms.abbreviation,rating;sort popularity desc ;offset ${offset}; limit ${limit} ; where rating > 20 & rating_count > 10 & first_release_date > ${lastMonthDate} & screenshots != null & cover != null & artworks != null & summary !=null;`,
    );
    return { data: data as GamesResponse, nextOffset: offset + limit };
  },
};
