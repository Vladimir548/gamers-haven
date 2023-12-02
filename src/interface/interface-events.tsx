export type ResponseEvents = Events[];

export interface Events {
  id: number;
  name: string;
  description?: string;
  slug: string;
  event_logo?: EventLogo;
  start_time?: number;
  time_zone?: string;
  games: Game[];
  videos?: number[];
  event_networks?: number[];
  created_at: number;
  updated_at: number;
  checksum: string;
  end_time?: number;
  timeStart: Date;
}

export interface EventLogo {
  id: number;
  event: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
  updated_at: number;
  checksum: string;
  created_at?: number;
}

export interface Game {
  id: number;
  age_ratings?: number[];
  aggregated_rating?: number;
  aggregated_rating_count?: number;
  artworks?: number[];
  bundles?: number[];
  category: number;
  cover?: Cover;
  created_at: number;
  expansions?: number[];
  external_games?: number[];
  first_release_date?: number;
  follows?: number;
  game_engines?: number[];
  game_modes?: number[];
  genres?: number[];
  hypes?: number;
  involved_companies?: number[];
  keywords?: number[];
  name: string;
  platforms?: number[];
  player_perspectives?: number[];
  rating?: number;
  rating_count?: number;
  release_dates?: number[];
  screenshots?: number[];
  similar_games?: number[];
  slug: string;
  storyline?: string;
  summary?: string;
  tags?: number[];
  themes?: number[];
  total_rating?: number;
  total_rating_count?: number;
  updated_at: number;
  url: string;
  videos?: number[];
  websites?: number[];
  checksum: string;
  language_supports?: number[];
  status?: number;
  alternative_names?: number[];
  game_localizations?: number[];
  multiplayer_modes?: number[];
  collection?: number;
  dlcs?: number[];
  standalone_expansions?: number[];
  parent_game?: number;
  version_parent?: number;
  version_title?: string;
  franchises?: number[];
  collections?: number[];
  franchise?: number;
  ports?: number[];
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
