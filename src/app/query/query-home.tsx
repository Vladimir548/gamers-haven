import axios from 'axios';
import { GamesResponse } from '@/interface/games/interface-games';
import { ResponseEvents } from '@/interface/interface-events';
import { GenresResponse } from '@/interface/interface-genres';
import { getPalette } from '@/app/get-pallete/getPalette';
// import { getAccessToken } from '@/app/query/query-auth';
import { CompaniesResponse } from '@/interface/interface-companies';
const currentDate = Math.floor(Date.now() / 1000);
const lastMonthDate = currentDate - 3 * 30 * 24 * 60 * 60;

export const QueryHome = {
  async getSwiper() {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `fields name,cover.*,  slug ,genres.name,artworks.*,platforms.abbreviation;sort popularity desc ; limit 20; where rating > 20 & rating_count > 10 & first_release_date > ${lastMonthDate} & screenshots != null & cover != null & artworks != null;`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );

    // const gamesWithPalettes = await Promise.all(
    //   data.map(async (game) => {
    //     const artwork = game.artworks![0];
    //
    //     const imgUrl = `https://images.igdb.com/igdb/image/upload/t_thumb/${artwork?.image_id}.jpg`;
    //     const colors = await getPalette(imgUrl);
    //     const palettes = [{ imgUrl, colors }]; // Обработанное изображение
    //
    //     return {
    //       ...game,
    //       palettes,
    //     };
    //   }),
    // );

    return data as GamesResponse;
  },
  async getPopular() {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `fields *,cover.*,genres.*,platforms.*,artworks.*,rating,  slug;sort rating_count desc ; limit 20; where rating > 40 & rating_count > 10  & screenshots != null & cover != null & artworks != null;`,
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
  async getComing() {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `fields *,cover.*,artworks.*, genres.name,slug,first_release_date ;sort first_release_date asc ; limit 20; where hypes > 20 & first_release_date > ${currentDate} & screenshots != null & cover != null & artworks != null;`,
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
  async getEvents() {
    const { data } = await axios.post<ResponseEvents>(
      '/igdb/events',
      `fields *,  event_logo.* ;sort start_time desc; limit 8; where event_logo !=null;`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );

    return data as ResponseEvents;
  },
  async getGenres() {
    const { data } = await axios.post<GenresResponse>('/igdb/genres', `fields * ;limit 25 ;`, {
      headers: {
        'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
        'Content-Type': 'text/plain',
      },
    });

    return data as GenresResponse;
  },
  async getSearch(value: string) {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `search "${value}"; fields name ;limit 15;`,
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
  async getPS5Games() {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `fields genres.*,platforms.*, artworks.*,rating ,name,slug; limit 20 ;sort rating_count desc; where (platforms = 167 | platforms = 48) & cover != null & rating_count > 30 & artworks != null; `,
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
  async getMultiplayer() {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `fields *, name, cover.*,genres.*,game_modes.*,artworks.*; limit 20 ;sort rating_count desc; where (game_modes =[2] | game_modes =[3] | game_modes =[4] | game_modes =[5] | game_modes =[6] )   & rating_count > 50 & artworks != null;  `,
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
  async getMobileGames() {
    const { data } = await axios.post<GamesResponse>(
      '/igdb/games',
      `fields *, name, cover.*,genres.*,game_modes.*,artworks.*; limit 20 ;sort rating_count desc; where (platforms =39 | platforms =21 )   & rating_count > 50 & artworks != null;  `,
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
};
