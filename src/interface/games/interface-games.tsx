import { GenresResponse } from '@/interface/interface-genres';
import { ResponsePlatforms } from '@/interface/interface-platforms';
import { ReleaseDate } from '@/interface/interface-release_dates';

export type GamesResponse = Games[];

export interface Games {
  id: number;
  age_ratings?: number[];
  artworks?: artwork[];
  category: number;
  cover?: Cover;
  created_at: number;
  external_games?: number[];
  first_release_date?: number;
  genres?: GenresResponse;
  name: string;
  platforms?: ResponsePlatforms;
  release_dates?: ReleaseDate[];
  screenshots?: screenshot[];
  similar_games?: number[];
  slug: string;
  storyline?: string;
  summary?: string;
  tags?: number[];
  themes?: number[];
  updated_at: number;
  url: string;
  websites?: number[];
  checksum: string;
  language_supports?: number[];
  alternative_names?: number[];
  collection?: number;
  follows?: number;
  franchises?: number[];
  game_modes?: number[];
  involved_companies?: number[];
  keywords?: number[];
  multiplayer_modes?: number[];
  player_perspectives?: number[];
  videos?: Video[];
  ports?: number[];
  collections?: number[];
  hypes?: number;
  status?: number;
  rating: number;
  rating_count: number;
  version_parent?: number;
  version_title?: string;
  game_engines?: number[];
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  palettes: Palette[];
}
interface Palette {
  imgUrl?: string;
  colors: (number[] | undefined)[];
}
export interface Video {
  checksum: string;
  game: number;
  id: number;
  name: string;
  video_id: string;
}
export interface Cover {
  id: number;
  url: string;
  image_id: string;
  width: number;
}
export interface screenshot {
  id: number;
  url: string;
  image_id: string;
}
export interface artwork {
  id: number;
  url: string;
  image_id: string;
}
