import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  engine: string[];
}

const initialState: IInitialState = {
  engine: [],
};
export const EnginesSlice = createSlice({
  name: 'engines',
  initialState,
  reducers: {
    toggleEngines(state, action: PayloadAction<string>) {
      const enginesList = state.engine.some((engine) => engine === action.payload);
      if (!enginesList) {
        state.engine = [...state.engine, action.payload];
      } else {
        state.engine = state.engine.filter((engine) => engine !== action.payload);
      }
    },
  },
});
export const { toggleEngines } = EnginesSlice.actions;
