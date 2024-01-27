import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  typeGamesCard: string | undefined;
}

const initialState: IInitialState = {
  typeGamesCard: 'card-one',
};

export const CardTypeSlice = createSlice({
  name: 'card-type',
  initialState,
  reducers: {
    cardTypeGames(state, action: PayloadAction<string>) {
      state.typeGamesCard = action.payload;
    },
  },
});

export const { cardTypeGames } = CardTypeSlice.actions;
