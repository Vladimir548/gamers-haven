'use client';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isActive: boolean;
}

const initialState: IInitialState = {
  isActive: false,
};
export const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleSidebar } = SidebarSlice.actions;
