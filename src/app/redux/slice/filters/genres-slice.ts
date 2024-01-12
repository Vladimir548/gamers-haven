import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  genre: string[];
}

const initialState: IInitialState = {
  genre: [],
};
export const GenresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    toggleGenres(state, action: PayloadAction<string>) {
      const genresList = state.genre.some((genre) => genre === action.payload);
      if (!genresList) {
        state.genre = [...state.genre, action.payload];
      } else {
        state.genre = state.genre.filter((genre) => genre !== action.payload);
      }
    },
  },
});
export const { toggleGenres } = GenresSlice.actions;
