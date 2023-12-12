export type ResponseFranchise = FranchiseSum[];

export interface FranchiseSum {
  id: number;
  franchises: Franchise[];
}

export interface Franchise {
  id: number;
  games: FranchiseGame[];
}

export interface FranchiseGame {
  id: number;
  cover?: Cover;
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
