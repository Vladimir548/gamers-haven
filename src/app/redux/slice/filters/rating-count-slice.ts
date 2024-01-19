import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const defaultMinValue: number = 0;
const defaultMaxValue: number = 5000;
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
    resetValueCountRating(state) {
      state.ratingCountMin = defaultMinValue;
      state.ratingCountMax = defaultMaxValue;
    },
  },
});

export const { getMinRatingCount, getMaxRatingCount, resetValueCountRating } =
  RatingCountSlice.actions;
