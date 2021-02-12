import React from 'react';
import {
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Chip,
  Link,
} from '@material-ui/core';
import { Quote } from '../stores/slices/quoteSlice';
import thumbnail from '../sample.gif';
// import useQuotes from '../hooks/useQuotes';

interface QuoteItemProps {
  quote: Quote;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    quoteCard: {
      width: '300px',
      height: 'auto',
    },
    thumbnail: {
      margin: '10px 10px',
      width: '250px',
      height: '160px',
      objectFit: 'cover',
    },
    quoteUrl: {},
    quoteDate: {},
    quoteTitle: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': '2',
    },
    quoteBody: {
      margin: '10px 10px',
      textAlign: 'left',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': '3',
    },
    quoteComment: {
      backgroundColor: '#dddddd',
      padding: '10px 10px',
      margin: '10px 10px',
      textAlign: 'left',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': '2',
    },
    quoteTags: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': '2',
    },
  })
);

const QuoteItem: React.FC<QuoteItemProps> = ({ quote }) => {
  const classes = useStyles();
  const urlre = quote.url.match(/^https?:\/\/(.*?)(?:\/|\?|#|$)/);

  const urlStr = urlre === null ? 'error' : urlre[1];
  const dateTime = new Date(quote.date);
  const dateStr = dateTime.toLocaleString('ja-JP');

  // const { actions } = useQuotes();
  return (
    <Card className={classes.quoteCard}>
      <CardContent>
        <img src={thumbnail} alt="thumbnail" className={classes.thumbnail} />
        <Typography
          className={classes.quoteTitle}
          color="textSecondary"
          gutterBottom
        >
          {quote.title}
        </Typography>
        <Typography className={classes.quoteDate} variant="body2">
          <Link
            className={classes.quoteUrl}
            href={quote.url}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            {urlStr}
          </Link>
          <div
            style={{
              userSelect: 'none',
              display: 'inline',
            }}
          >
            {' / '}
          </div>
          {dateStr}
        </Typography>
        <Typography className={classes.quoteBody} variant="body1">
          {quote.quoteBody}
        </Typography>
        <Typography
          className={classes.quoteComment}
          variant="body2"
          color="textSecondary"
        >
          {quote.comment}
        </Typography>
        <div className={classes.quoteTags}>
          {quote.tags.map((x) => (
            <Chip
              variant="outlined"
              color="primary"
              label={x}
              size="small"
              style={{ margin: '0.1rem' }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteItem;
