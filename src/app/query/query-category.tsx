import { instanceIGDB } from '@/api/axios';
import { GamesResponse } from '@/interface/games/interface-games';

export const QueryCategory = {
  async getTopHundred() {
    const { data } = await instanceIGDB.post(
      '/igdb/games',
      `fields *,cover.*,genres.*,platforms.*,artworks.*,rating,storyline,first_release_date,themes.*,  slug;sort rating_count desc ; limit 100;`,
    );
    return data as GamesResponse;
  },
};
