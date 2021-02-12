import { useSelector } from 'react-redux';
import { Quote, selectQuotes } from '../stores/slices/quoteSlice';

const useQuotes = (): {
  quotes: Quote[] | undefined;
  actions: {};
} => {
  const quotes = useSelector(selectQuotes);
  const actions = {};
  return { quotes, actions };
};
export default useQuotes;
