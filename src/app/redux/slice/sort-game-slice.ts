import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  sort: string;
}
const initialState: IInitialState = {
  sort: 'rating desc',
};
export const SortGameSlice = createSlice({
  name: 'sort-game',
  initialState,
  reducers: {
    getSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const { getSort } = SortGameSlice.actions;
