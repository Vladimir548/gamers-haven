import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  ratingCountMin: number;
  ratingCountMax: number;
}
const initialState: IInitialState = {
  ratingCountMin: 0,
  ratingCountMax: 5000,
};
export const RatingCountSlice = createSlice({
  name: 'rating-count',
  initialState,
  reducers: {
    getMinRatingCount(state, action: PayloadAction<number>) {
      state.ratingCountMin = action.payload;
    },
    getMaxRatingCount(state, action: PayloadAction<number>) {
      state.ratingCountMax = action.payload;
    },
  },
});

export const { getMinRatingCount, getMaxRatingCount } = RatingCountSlice.actions;
