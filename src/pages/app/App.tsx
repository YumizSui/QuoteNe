import React, { useEffect } from 'react';
import './App.css';
import {
  CssBaseline,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import TopBar from '../../features/TopBar';
import useTitle from '../../hooks/useTitle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
        'user-select': 'none',
      },
    },
  })
);
function App() {
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
      <header className={classes.text}>素晴らしいコンテンツ</header>
    </div>
  );
}

export default App;
