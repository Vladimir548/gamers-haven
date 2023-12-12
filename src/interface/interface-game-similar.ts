export type ResponseSimilar = Similar[];

export interface Similar {
  id: number;
  similar_games: SimilarGame[];
}

export interface SimilarGame {
  id: number;
  cover: Cover;
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
