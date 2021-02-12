import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import quoteReducer from './slices/quoteSlice';

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
