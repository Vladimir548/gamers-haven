import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  theme: string[];
}

const initialState: IInitialState = {
  theme: [],
};
export const ThemesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleThemes(state, action: PayloadAction<string>) {
      const themesList = state.theme.some((theme) => theme === action.payload);
      if (!themesList) {
        state.theme = [...state.theme, action.payload];
      } else {
        state.theme = state.theme.filter((theme) => theme !== action.payload);
      }
    },
  },
});
export const { toggleThemes } = ThemesSlice.actions;
