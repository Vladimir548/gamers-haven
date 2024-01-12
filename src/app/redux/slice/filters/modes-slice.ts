import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  mode: string[];
}

const initialState: IInitialState = {
  mode: [],
};
export const ModesSlice = createSlice({
  name: 'modes',
  initialState,
  reducers: {
    toggleModes(state, action: PayloadAction<string>) {
      const modesList = state.mode.some((mode) => mode === action.payload);
      if (!modesList) {
        state.mode = [...state.mode, action.payload];
      } else {
        state.mode = state.mode.filter((mode) => mode !== action.payload);
      }
    },
  },
});
export const { toggleModes } = ModesSlice.actions;
