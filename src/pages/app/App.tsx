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
            id: '111',
            title: 'hoge',
            url: 'huga',
            contentType: 'html/text',
            date: 'aaa',
            tags: [],
          }}
        />
        {/* </Slide> */}
      </header>
    </div>
  );
};

export default App;
