import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  platform: string[];
}

const initialState: IInitialState = {
  platform: [],
};
export const PlatformsSlice = createSlice({
  name: 'platforms',
  initialState,
  reducers: {
    togglePlatforms(state, action: PayloadAction<string>) {
      const platformsList = state.platform.some((platform) => platform === action.payload);
      if (!platformsList) {
        state.platform = [...state.platform, action.payload];
      } else {
        state.platform = state.platform.filter((platform) => platform !== action.payload);
      }
    },
  },
});
export const { togglePlatforms } = PlatformsSlice.actions;
