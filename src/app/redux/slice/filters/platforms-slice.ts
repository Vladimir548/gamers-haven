import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  platform: number[];
}

const initialState: IInitialState = {
  platform: [],
};
export const PlatformsSlice = createSlice({
  name: 'platforms',
  initialState,
  reducers: {
    togglePlatforms(state, action: PayloadAction<number>) {
      const platformsList = state.platform.some((platform) => platform === action.payload);
      if (!platformsList) {
        state.platform = [...state.platform, action.payload];
      } else {
        state.platform = state.platform.filter((platform) => platform !== action.payload);
      }
    },
    addPlatforms(state, action: PayloadAction<number>) {
      const platformsList = state.platform.some((platform) => platform === action.payload);
      if (!platformsList) {
        state.platform = [...state.platform, action.payload];
      }
    },
    resetPlatforms(state) {
      state.platform = [];
    },
  },
});
export const { togglePlatforms, addPlatforms, resetPlatforms } = PlatformsSlice.actions;
