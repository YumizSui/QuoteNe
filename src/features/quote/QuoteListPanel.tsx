import React from 'react';
import {
  createStyles,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
} from '@material-ui/core';
import useQuotes from '../../hooks/useQuotes';
import QuoteItem from './QuoteItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: { width: 'calc(1200px + 50px)' },
    gridTile: { height: '500px !important' },
  })
);

interface QuoteListPanelProps {
  hasLastDivider?: boolean;
}

const QuoteListPanel: React.FC<QuoteListPanelProps> = (props) => {
  const classes = useStyles();
  const quote = {
    id: '8e0433f6-6cf8-11eb-9439-0242ac130002',
    title: '湯水🐧水さん (@YumizSui) / Twitter',
    url: 'https://twitter.com/YumizSui',
    contentType: 'html/text',
    quoteBody:
      '🐧🐧🐧せいぞんせんりゃくううううううううううううううううう！！！！！🍎',
    comment: '輪るピングドラムはいいぞ．',
    date: '2021-02-12T01:23:45.000Z',
    tags: ['アニメ', 'twitter', '輪るピングドラム'],
  };
  const quotes = [
    quote,
    quote,
    quote,
    quote,
    quote,
    quote,
    quote,
    quote,
    quote,
  ];
  return (
    <div className={classes.list}>
      <GridList className={classes.gridList} cols={4}>
        {quotes ? (
          quotes.map((quote, i) => (
            <GridListTile
              className={classes.gridTile}
              key={`quotelist-${quote.id}-${i}`}
              cols={1}
            >
              <QuoteItem quote={quote} key={`quote-${quote.id}-${i}`} />
            </GridListTile>
          ))
        ) : (
          <div>hogeeea</div>
        )}
      </GridList>
    </div>
  );
};

export default QuoteListPanel;
