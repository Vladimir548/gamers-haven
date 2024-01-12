export type FavoriteResponse = IFavorite[];
export interface IFavorite {
  id: number;
  userId: number;
  gameId: number;
  gameTitle: string;
  genres: string[];
  poster: string;
  rating: number;
  releaseYear: number;
}
