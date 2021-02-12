import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import App from './app/App';
import { useSelector } from 'react-redux';
import { selectTheme } from '../stores/slices/themeSlice';
import { useMemo } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const MainRoute = (): JSX.Element => {
  const theme = useSelector(selectTheme);
  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: theme.primary,
          },
          secondary: {
            main: theme.secondary,
          },
        },
      }),
    [theme]
  );
  return (
    <ThemeProvider theme={muiTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/app" component={App} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default MainRoute;
