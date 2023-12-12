import axios from 'axios';
import { Games } from '@/interface/games/interface-games';
import { ResponseGameInfo } from '@/interface/interface-game-info';
import { ResponseSimilar } from '@/interface/interface-game-similar';
import { ResponseFranchise } from '@/interface/games/interface-game-franchise';

export const QueryGame = {
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
  async getGameImages(id: string) {
    const { data } = await axios.post<Games[]>(
      `/igdb/games`,
      `fields artworks.*,videos.*,screenshots.*;where id=${id};`,
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
  async getGameInfo(id: string) {
    const { data } = await axios.post<ResponseGameInfo>(
      `/igdb/games`,
      `fields  collection.*,collections.*,external_games.*,release_dates.*,release_dates.platform.abbreviation,franchise.*,franchises.*,game_engines.*,game_localizations.*,game_modes.*,involved_companies.company.*,language_supports.language.*,language_supports.language_support_type.*,parent_game.*,remakes.*,remasters.*,themes.*;where id=${id};`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );
    return data as ResponseGameInfo;
  },
  async getGameSimilar(id: string) {
    const { data } = await axios.post<ResponseSimilar>(
      `/igdb/games`,
      `fields similar_games.cover.*;limit 20;where id=${id} & similar_games.cover != null ;`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );
    return data as ResponseSimilar;
  },
  async getGameFranchise(id: string) {
    const { data } = await axios.post<ResponseFranchise>(
      `/igdb/games`,
      `fields franchises.games.cover.*;limit 20;where id=${id}  ;`,
      {
        headers: {
          'Client-ID': `${process.env.NEXT_PUBLIC_CLIENTID}`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEYAUTHORIZATION} `,
          'Content-Type': 'text/plain',
        },
      },
    );
    return data as ResponseFranchise;
  },
};
