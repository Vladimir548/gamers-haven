export type ThemesResponse = Themes[];

export interface Themes {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
