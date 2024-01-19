import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  ratingMin: number;
  ratingMax: number;
}
const defaultMinValue: number = 0;
const defaultMaxValue: number = 100;
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
    resetValueRating(state) {
      state.ratingMin = defaultMinValue;
      state.ratingMax = defaultMaxValue;
    },
  },
});

export const { getMinRating, getMaxRating, resetValueRating } = RatingSlice.actions;
