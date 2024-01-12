import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { SidebarSlice } from '@/app/redux/slice/sidebar-slice';
import { GenresSlice } from '@/app/redux/slice/filters/genres-slice';
import { PlatformsSlice } from '@/app/redux/slice/filters/platforms-slice';
import { EnginesSlice } from '@/app/redux/slice/filters/engines-slice';
import { ModesSlice } from '@/app/redux/slice/filters/modes-slice';
import { YearSlice } from '@/app/redux/slice/filters/year-slice';
import { RatingSlice } from '@/app/redux/slice/filters/rating-slice';
import { RatingCountSlice } from '@/app/redux/slice/filters/rating-count-slice';
import { ThemesSlice } from '@/app/redux/slice/filters/themes-slice';

const rootReducer = combineReducers({
  sidebar: SidebarSlice.reducer,
  genres: GenresSlice.reducer,
  platforms: PlatformsSlice.reducer,
  engines: EnginesSlice.reducer,
  modes: ModesSlice.reducer,
  years: YearSlice.reducer,
  rating: RatingSlice.reducer,
  ratingCount: RatingCountSlice.reducer,
  themes: ThemesSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
