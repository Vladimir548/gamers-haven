import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  mode: number[];
}

const initialState: IInitialState = {
  mode: [],
};
export const ModesSlice = createSlice({
  name: 'modes',
  initialState,
  reducers: {
    toggleModes(state, action: PayloadAction<number>) {
      const modesList = state.mode.some((mode) => mode === action.payload);
      if (!modesList) {
        state.mode = [...state.mode, action.payload];
      } else {
        state.mode = state.mode.filter((mode) => mode !== action.payload);
      }
    },
    addModes(state, action: PayloadAction<number>) {
      const modesList = state.mode.some((mode) => mode === action.payload);
      if (!modesList) {
        state.mode = [...state.mode, action.payload];
      }
    },
    resetModes(state) {
      state.mode = [];
    },
  },
});
export const { toggleModes, addModes, resetModes } = ModesSlice.actions;
