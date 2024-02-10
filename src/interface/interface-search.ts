export type SearchResponse = Search[];

export interface Search {
  id: number;
  game?: Game;
  name: string;
}

export interface Game {
  id: number;
  cover: Cover;
  genres?: Genre[];
}

export interface Cover {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
  checksum: string;
}

export interface Genre {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
