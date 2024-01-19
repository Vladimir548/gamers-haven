export interface InterfaceFilterSort {
  ratingMin: number;
  ratingMax: number;
  ratingCountMin: number;
  ratingCountMax: number;
  yearMin: number;
  yearMax: number;
  genre: number[] | undefined;
  theme: number[] | undefined;
  mode: number[] | undefined;
  engine: number[] | undefined;
  platform: number[] | undefined;
  sort: string;
}
