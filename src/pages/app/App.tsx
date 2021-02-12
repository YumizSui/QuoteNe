import React, { useEffect } from 'react';
import {
  CssBaseline,
  createStyles,
  makeStyles,
  Theme,
  // Slide,
} from '@material-ui/core';
import TopBar from '../../features/TopBar';
import useTitle from '../../hooks/useTitle';
import QuoteItem from '../../features/quote/QuoteItem';
import QuoteListPanel from '../../features/quote/QuoteListPanel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      padding: theme.spacing(10),
    },
  })
);
const App = (): JSX.Element => {
  const setTitle = useTitle();
  const classes = useStyles();

  // debug
  const quotes = [
    {
      id: '8e0433f6-6cf8-11eb-9439-0242ac130002',
      title: '湯水🐧水さん (@YumizSui) / Twitter',
      url: 'https://twitter.com/YumizSui',
      contentType: 'html/text',
      quoteBody:
        '🐧🐧🐧せいぞんせんりゃくううううううううううううううううう！！！！！🍎',
      comment: '輪るピングドラムはいいぞ．',
      date: '2021-02-12T01:23:45.000Z',
      tags: ['アニメ', 'twitter', '輪るピングドラム'],
    },
  ];

  let title: string | undefined = undefined;
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <main className={classes.content}>
        {/* <Slide direction="up" in={true} timeout={1000}> */}
        <QuoteListPanel />
        {/* <QuoteItem quote={quote} /> */}
        {/* </Slide> */}
      </main>
    </div>
  );
};

export default App;
