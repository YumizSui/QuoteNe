import React, { useEffect } from 'react';
import './App.css';
import {
  CssBaseline,
  createStyles,
  makeStyles,
  Theme,
  Slide,
  Typography,
} from '@material-ui/core';
import TopBar from '../../features/TopBar';
import useTitle from '../../hooks/useTitle';

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
    text: {
      fontSize: 'calc(10px + 5vmin)',
      color: 'white',
      '&:hover': {
        userSelect: 'none',
      },
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
        <Slide direction="up" in={true} timeout={1000}>
          <Typography className={classes.text}>素晴らしいコンテンツ</Typography>
        </Slide>
      </header>
    </div>
  );
};

export default App;
