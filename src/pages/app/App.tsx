import React, { useEffect } from 'react';
import './App.css';
import {
  CssBaseline,
  createStyles,
  makeStyles,
  Theme,
  // Slide,
} from '@material-ui/core';
import TopBar from '../../features/TopBar';
import useTitle from '../../hooks/useTitle';
import QuoteItem from '../../features/QuoteItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
const App = (): JSX.Element => {
  const setTitle = useTitle();
  const classes = useStyles();

  let title: string | undefined = undefined;
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <header className={classes.content}>
        {/* <Slide direction="up" in={true} timeout={1000}> */}
        <QuoteItem
          quote={{
            id: '8e0433f6-6cf8-11eb-9439-0242ac130002',
            title: '湯水🐧水さん (@YumizSui) / Twitter',
            url: 'https://twitter.com/YumizSui',
            contentType: 'html/text',
            quoteBody:
              '🐧🐧🐧せいぞんせんりゃくううううううううううううううううう！！！！！🍎',
            comment: '廻るピングドラムはいいぞ．',
            date: '2021-02-12T01:23:45.000Z',
            tags: ['アニメ', 'twitter', '廻るピングドラム'],
          }}
        />
        {/* </Slide> */}
      </header>
    </div>
  );
};

export default App;
