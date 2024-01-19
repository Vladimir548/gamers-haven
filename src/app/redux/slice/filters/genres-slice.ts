import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  genre: number[];
}

const initialState: IInitialState = {
  genre: [],
};
export const GenresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    toggleGenres(state, action: PayloadAction<number>) {
      const genresList = state.genre.some((genre) => genre === action.payload);
      if (!genresList) {
        state.genre = [...state.genre, action.payload];
      } else {
        state.genre = state.genre.filter((genre) => genre !== action.payload);
      }
    },
    addGenres(state, action: PayloadAction<number>) {
      const genresList = state.genre.some((genre) => genre === action.payload);
      if (!genresList) {
        state.genre = [...state.genre, action.payload];
      }
    },
    resetGenres(state) {
      state.genre = [];
    },
  },
});
export const { toggleGenres, addGenres, resetGenres } = GenresSlice.actions;
