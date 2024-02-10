import axios from 'axios';
import { Games, GamesResponse } from '@/interface/games/interface-games';
import { InterfaceFilterSort } from '@/interface/interface-filter-sort';
import { instanceIGDB } from '@/api/axios';
const currentDate = Math.floor(Date.now() / 1000);
const lastMonthDate = currentDate - 3 * 30 * 24 * 60 * 60;
export const QueryGames = {
  async getGames(dto: InterfaceFilterSort, limit: number, offset: number) {
    const unixMinYear = new Date(dto.yearMin, 0, 1).getTime() / 1000;
    const unixMaxYear = new Date(dto.yearMax, 0, 1).getTime() / 1000;

    const { data } = await instanceIGDB.post(
      '/igdb/games',
      `fields *, screenshots.*, slug, cover.*,genres.*,themes.name,artworks.*,platforms.*; limit ${limit};sort ${
        dto.sort
      } ;offset ${offset};
      where  first_release_date >= ${unixMinYear} & first_release_date <= ${unixMaxYear} & 
     rating >= ${dto.ratingMin} & rating <= ${dto.ratingMax} & 
     rating_count >= ${dto.ratingCountMin} & rating_count <= ${dto.ratingCountMax}  
     ${dto.genre && dto.genre?.length > 0 ? `& genres = [${dto.genre}]` : ''}
     ${dto.mode && dto.mode?.length > 0 ? `& game_modes = [${dto.mode}]` : ''}
     ${dto.engine && dto.engine?.length > 0 ? `& game_engines = [${dto.engine}]` : ''}
     ${dto.theme && dto.theme?.length > 0 ? `& themes = [${dto.theme}]` : ''}
     ${dto.platform && dto.platform?.length > 0 ? `& platforms = [${dto.platform}]` : ''}
       &  screenshots != null & cover != null & artworks != null;`,
    );
    return { data: data as GamesResponse, nextOffset: offset + limit };
  },
  async getSwiperGames() {
    const { data } = await instanceIGDB.post<GamesResponse>(
      '/igdb/games',
      `fields name,cover.*,  slug,summary ,genres.name,artworks.*,platforms.abbreviation;sort popularity desc ; limit 20; where rating > 10 & rating_count > 5 & first_release_date > ${lastMonthDate} & screenshots != null & cover != null & artworks != null & summary !=null;`,
    );
    return data as GamesResponse;
  },
};
