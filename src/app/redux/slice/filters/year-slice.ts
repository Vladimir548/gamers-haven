import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const date = new Date();
const nowYear = date.getFullYear();

interface IInitialState {
  yearMin: number;
  yearMax: number;
}
const initialState: IInitialState = {
  yearMin: 2000,
  yearMax: nowYear,
};
export const YearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    getMinYear(state, action: PayloadAction<number>) {
      state.yearMin = action.payload;
    },
    getMaxYear(state, action: PayloadAction<number>) {
      state.yearMax = action.payload;
    },
  },
});

export const { getMinYear, getMaxYear } = YearSlice.actions;
