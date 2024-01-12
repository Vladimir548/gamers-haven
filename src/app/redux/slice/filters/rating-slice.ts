import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  ratingMin: number;
  ratingMax: number;
}
const initialState: IInitialState = {
  ratingMin: 0,
  ratingMax: 100,
};
export const RatingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    getMinRating(state, action: PayloadAction<number>) {
      state.ratingMin = action.payload;
    },
    getMaxRating(state, action: PayloadAction<number>) {
      state.ratingMax = action.payload;
    },
  },
});

export const { getMinRating, getMaxRating } = RatingSlice.actions;
