import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface BreadCrumbState {
  theme: string;
}

const initialState: BreadCrumbState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState): string => state.theme.theme;

export default themeSlice.reducer;
