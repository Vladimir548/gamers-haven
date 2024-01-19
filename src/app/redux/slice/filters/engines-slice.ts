import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  engine: number[];
}

const initialState: IInitialState = {
  engine: [],
};
export const EnginesSlice = createSlice({
  name: 'engines',
  initialState,
  reducers: {
    toggleEngines(state, action: PayloadAction<number>) {
      const enginesList = state.engine.some((engine) => engine === action.payload);
      if (!enginesList) {
        state.engine = [...state.engine, action.payload];
      } else {
        state.engine = state.engine.filter((engine) => engine !== action.payload);
      }
    },
    addEngines(state, action: PayloadAction<number>) {
      const enginesList = state.engine.some((engine) => engine === action.payload);
      if (!enginesList) {
        state.engine = [...state.engine, action.payload];
      }
    },
    resetEngine(state) {
      state.engine = [];
    },
  },
});
export const { toggleEngines, addEngines, resetEngine } = EnginesSlice.actions;
