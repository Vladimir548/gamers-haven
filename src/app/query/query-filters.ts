import axios from 'axios';
import { GenresResponse } from '@/interface/interface-genres';
import { ResponsePlatforms } from '@/interface/interface-platforms';
import { GameEngine, GameMode } from '@/interface/interface-game-info';
import { ThemesResponse } from '@/interface/interface-themes';
import { instanceIGDB } from '@/api/axios';

export const QueryFilters = {
  async getGenres() {
    const { data } = await instanceIGDB.post<GenresResponse>(
      '/igdb/genres',
      'fields name; limit 25;',
    );
    return data as GenresResponse;
  },
  async getEngines() {
    const { data } = await instanceIGDB.post<GameEngine[]>(
      '/igdb/game_engines',
      'fields name; limit 50;',
    );
    return data as GameEngine[];
  },
  async getModes() {
    const { data } = await instanceIGDB.post<GameMode[]>(
      '/igdb/game_modes',
      'fields name; limit 20;',
    );
    return data as GameMode[];
  },
  async getPlatforms() {
    const { data } = await instanceIGDB.post<ResponsePlatforms>(
      '/igdb/platforms',
      'fields *, abbreviation,alternative_name,category,name,platform_family; limit 85;sort id desc;where abbreviation !=null & category=(1,6);',
    );
    return data as ResponsePlatforms;
  },
  async getTheme() {
    const { data } = await instanceIGDB.post<ThemesResponse>(
      '/igdb/themes',
      'fields name; limit 85;',
    );
    return data as ThemesResponse;
  },
};
