import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Quote } from '../stores/slices/quoteSlice';
// import useQuotes from '../hooks/useQuotes';

interface QuoteItemProps {
  quote: Quote;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    message: {
      fontSize: 'calc(10px + 5vmin)',
      color: 'white',
      userSelect: 'none',
    },
  })
);

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
  const classes = useStyles();
  // const { actions } = useQuotes();
  return (
    <Typography className={classes.message}>
      素晴らしいコンテンツが入る
    </Typography>
  );
};

export default QuoteItem;
