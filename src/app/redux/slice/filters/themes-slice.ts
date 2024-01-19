import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  theme: number[];
}

const initialState: IInitialState = {
  theme: [],
};
export const ThemesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleThemes(state, action: PayloadAction<number>) {
      const themesList = state.theme.some((theme) => theme === action.payload);
      if (!themesList) {
        state.theme = [...state.theme, action.payload];
      } else {
        state.theme = state.theme.filter((theme) => theme !== action.payload);
      }
    },
    addThemes(state, action: PayloadAction<number>) {
      const themesList = state.theme.some((theme) => theme === action.payload);
      if (!themesList) {
        state.theme = [...state.theme, action.payload];
      }
    },
    resetThemes(state) {
      state.theme = [];
    },
  },
});
export const { toggleThemes, addThemes, resetThemes } = ThemesSlice.actions;
