import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  selectValue: string;
}

const initialState: IInitialState = {
  selectValue: '',
};

export const SelectSearchSlice = createSlice({
  name: 'select-search',
  initialState,
  reducers: {
    getSelectValue(state, action: PayloadAction<string>) {
      state.selectValue = action.payload;
    },
  },
});

export const { getSelectValue } = SelectSearchSlice.actions;
