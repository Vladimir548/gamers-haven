import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { SidebarSlice } from '@/app/redux/slice/sidebar-slice';

const rootReducer = combineReducers({
  sidebar: SidebarSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
