export type CompaniesResponse = Companies[];

export interface Companies {
  id: number;
  change_date_category: number;
  created_at: number;
  logo: Logo;
  name: string;
  slug: string;
  start_date?: number;
  start_date_category: number;
  updated_at: number;
  url: string;
  websites?: number[];
  checksum: string;
  country?: number;
  description?: string;
  published?: number[];
  change_date?: number;
  parent?: number;
}

export interface Logo {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  height: number;
  image_id: string;
  url: string;
  width: number;
  checksum: string;
}
