import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Quote {
  id: string;
  title: string;
  url: string;
  contentType: string;
  quoteBody?: string;
  thumbnail?: string;
  imgId?: string;
  date: string;
  tags: string[];
  comment?: string;
}
interface QuoteState {
  quotes: Quote[] | undefined;
}

const initialState: QuoteState = {
  quotes: [],
};

export const selectQuotes = (state: RootState): Quote[] | undefined =>
  state.quote.quotes;

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
});

export default quoteSlice.reducer;
