import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ThemeState {
  primary: string;
  secondary: string;
}

const initialState: ThemeState = {
  primary: '#704cb3',
  secondary: '#00bcd4',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<Partial<ThemeState>>) => {
      if (action.payload.primary && action.payload.secondary) {
        return {
          primary: action.payload.primary,
          secondary: action.payload.secondary,
        };
      }
      if (action.payload.primary) {
        return { ...state, primary: action.payload.primary };
      }
      if (action.payload.secondary) {
        return { ...state, secondary: action.payload.secondary };
      }
      return { ...state };
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export const selectTheme = (state: RootState): ThemeState => state.theme;

export default themeSlice.reducer;
