export type ResponseGameInfo = GameInfo[];

export interface GameInfo {
  id: number;
  external_games: ExternalGame[];
  franchises: Franchise[];
  game_engines: GameEngine[];
  game_modes: GameMode[];
  involved_companies: InvolvedCompany[];
  release_dates: ReleaseDate[];
  themes: Theme[];
  language_supports: LanguageSupport[];
  game_localizations: GameLocalization[];
  collections: Collection[];
}

export interface ExternalGame {
  id: number;
  category: number;
  created_at: number;
  game: number;
  name?: string;
  uid: string;
  updated_at: number;
  checksum: string;
  url?: string;
  year?: number;
}

export interface Franchise {
  id: number;
  created_at: number;
  games: number[];
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}

export interface GameEngine {
  id: number;
  companies: number[];
  created_at: number;
  logo: number;
  name: string;
  platforms: number[];
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}

export interface GameMode {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}

export interface InvolvedCompany {
  id: number;
  company: Company;
}

export interface Company {
  id: number;
  change_date_category: number;
  country: number;
  created_at: number;
  description?: string;
  developed?: number[];
  logo: number;
  name: string;
  published?: number[];
  slug: string;
  start_date: number;
  start_date_category: number;
  updated_at: number;
  url: string;
  websites?: number[];
  checksum: string;
  parent?: number;
  change_date?: number;
  changed_company_id?: number;
}

export interface ReleaseDate {
  id: number;
  category: number;
  created_at: number;
  date: number;
  game: number;
  human: string;
  m: number;
  platform: {
    abbreviation: string;
  };
  region: number;
  updated_at: number;
  y: number;
  checksum: string;
}

export interface Theme {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}

export interface LanguageSupport {
  id: number;
  language: Language;
  language_support_type: LanguageSupportType;
}

export interface Language {
  id: number;
  name: string;
  native_name: string;
  locale: string;
  created_at: number;
  updated_at: number;
  checksum: string;
}

export interface LanguageSupportType {
  id: number;
  name: string;
  created_at: number;
  updated_at: number;
  checksum: string;
}

export interface GameLocalization {
  id: number;
  name: string;
  game: number;
  region: number;
  created_at: number;
  updated_at: number;
  checksum: string;
}

export interface Collection {
  id: number;
  created_at: number;
  games: number[];
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
