import axios from 'axios';
import { Games, GamesResponse } from '@/interface/games/interface-games';
// import { getAccessToken } from '@/app/query/query-auth';

export const QueryGames = {
  async getGames() {
    const { data } = await axios.post(
      '/igdb/games',
      `fields *, screenshots.*, slug, cover.*,genres.*,artworks.*,platforms.*; limit 20; where total_rating > 90 & screenshots != null & cover != null & artworks != null;`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );
    return data as GamesResponse;
  },
  async getGame(id: string) {
    const { data } = await axios.post<Games[]>(
      `/igdb/games`,
      `fields *,cover.*,genres.*,platforms.*,artworks.*,rating,rating_count,first_release_date,  slug;where id=${id};`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );
    return data as Games[];
  },
};
