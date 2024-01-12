import { axiosClassic } from '@/api/axios';

import { FavoriteResponse } from '@/interface/user/interface-favorite';
import { getIdUser } from '@/services/auth/auth.helper';
import { API_URL } from '@/constants';
export interface FavoriteDtoAdd {
  gameId: number | undefined;
  gameTitle: string | undefined;
  genres: string[] | undefined;
  poster: string | undefined;
  rating: number | undefined;
  releaseYear: number | undefined;
}
interface IsFavorite {
  isFavorite: boolean;
}
const userId = getIdUser();
export const QueryFavorite = {
  async getFavorite() {
    const { data } = await axiosClassic.get<FavoriteResponse>(
      `${API_URL}/favorite-game/${userId}/favorite`,
    );
    return data as FavoriteResponse;
  },
  async getIsFavorite(id: number | undefined) {
    const { data } = await axiosClassic.get<boolean>(
      `${API_URL}/favorite-game/${userId}/isFavorite/${id}`,
      {},
    );
    return data as boolean;
  },
  async addFavorite(dto: FavoriteDtoAdd) {
    const fieldGame = {
      userId: userId,
      gameId: dto.gameId,
      gameTitle: dto.gameTitle,
      genres: dto.genres,
      poster: dto.poster,
      rating: dto.rating,
      releaseYear: dto.releaseYear,
    };
    const { data } = await axiosClassic.post<IsFavorite>(
      `${API_URL}/favorite-game/add-favorite`,
      fieldGame,
    );

    return data as IsFavorite;
  },
};
