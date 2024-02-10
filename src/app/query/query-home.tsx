import axios from 'axios';
import { GamesResponse } from '@/interface/games/interface-games';
import { ResponseEvents } from '@/interface/interface-events';
import { GenresResponse } from '@/interface/interface-genres';
import { instanceIGDB } from '@/api/axios';

const currentDate = Math.floor(Date.now() / 1000);
const lastMonthDate = currentDate - 3 * 30 * 24 * 60 * 60;

export const QueryHome = {
  async getSwiper() {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields name,cover.*,  slug,summary ,genres.name,artworks.*,platforms.abbreviation;sort popularity desc ; limit 20; where rating > 20 & rating_count > 10 & first_release_date > ${lastMonthDate} & screenshots != null & cover != null & artworks != null & summary !=null;`,
    );
    return data as GamesResponse;
  },
  async getPopular() {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields *,cover.*,genres.*,platforms.*,artworks.*,rating,  slug;sort rating_count desc ; limit 20; where rating > 40 & rating_count > 10  & screenshots != null & cover != null & artworks != null;`,
    );

    return data as GamesResponse;
  },
  async getComing() {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields *,cover.*,artworks.*, genres.name,slug,first_release_date ;sort first_release_date asc ; limit 20; where hypes > 20 & first_release_date > ${currentDate} & screenshots != null & cover != null & artworks != null;`,
    );

    return data as GamesResponse;
  },
  async getEvents() {
    const { data } = await instanceIGDB.post<ResponseEvents>(
      '/igdb/events',
      `fields *,  event_logo.* ;sort start_time desc; limit 8; where event_logo !=null;`,
    );

    return data as ResponseEvents;
  },
  async getGenres() {
    const { data } = await instanceIGDB.post<GenresResponse>(
      '/igdb/genres',
      `fields * ;limit 25 ;`,
    );

    return data as GenresResponse;
  },
  async getSearch(value: string) {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `search "${value}"; fields name ;limit 15;`,
    );

    return data as GamesResponse;
  },
  async getPS5Games() {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields genres.*,platforms.*, artworks.*,rating ,name,slug; limit 20 ;sort rating_count desc; where (platforms = 167 | platforms = 48) & cover != null & rating_count > 30 & artworks != null; `,
    );
    return data as GamesResponse;
  },
  async getMultiplayer() {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields *, name, cover.*,genres.*,game_modes.*,artworks.*; limit 20 ;sort rating_count desc; where (game_modes =[2] | game_modes =[3] | game_modes =[4] | game_modes =[5] | game_modes =[6] )   & rating_count > 50 & artworks != null;  `,
    );
    return data as GamesResponse;
  },
  async getMobileGames() {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields *, name, cover.*,genres.*,game_modes.*,artworks.*; limit 20 ;sort rating_count desc; where (platforms =39 | platforms =21 )   & rating_count > 50 & artworks != null;  `,
    );
    return data as GamesResponse;
  },
};
