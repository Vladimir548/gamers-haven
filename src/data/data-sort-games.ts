interface IDataSortGames {
  id: number;
  value: string;
  name: string;
}
export const DATASORTGAMES: IDataSortGames[] = [
  {
    id: 0,
    value: 'rating desc',
    name: 'Rating DESC',
  },
  {
    id: 1,
    value: 'rating asc',
    name: 'Rating ASC',
  },
  {
    id: 2,
    value: 'first_release_date asc',
    name: 'Release Date ASC',
  },
  {
    id: 3,
    value: 'first_release_date desc',
    name: 'Release Date DESC',
  },
];
