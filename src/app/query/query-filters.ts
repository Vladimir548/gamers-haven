import axios from 'axios';
import { GenresResponse } from '@/interface/interface-genres';
import { ResponsePlatforms } from '@/interface/interface-platforms';
import { GameEngine, GameMode } from '@/interface/interface-game-info';
import { ThemesResponse } from '@/interface/interface-themes';

export const QueryFilters = {
  async getGenres() {
    const { data } = await axios.post<GenresResponse>('/igdb/genres', 'fields name; limit 25;', {
      headers: {
        'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
      },
    });
    return data as GenresResponse;
  },
  async getEngines() {
    const { data } = await axios.post<GameEngine[]>(
      '/igdb/game_engines',
      'fields name; limit 50;',
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
        },
      },
    );
    return data as GameEngine[];
  },
  async getModes() {
    const { data } = await axios.post<GameMode[]>('/igdb/game_modes', 'fields name; limit 20;', {
      headers: {
        'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
      },
    });
    return data as GameMode[];
  },
  async getPlatforms() {
    const { data } = await axios.post<ResponsePlatforms>(
      '/igdb/platforms',
      'fields *, abbreviation,alternative_name,category,name,platform_family; limit 85;sort id desc;where abbreviation !=null & category=(1,6);',
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
        },
      },
    );
    return data as ResponsePlatforms;
  },
  async getTheme() {
    const { data } = await axios.post<ThemesResponse>('/igdb/themes', 'fields name; limit 85;', {
      headers: {
        'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
      },
    });
    return data as ThemesResponse;
  },
};
