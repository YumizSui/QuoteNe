import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import App from './app/App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const MainRoute = (): JSX.Element => {
  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#494b4f',
        main: '#3f50b5',
        dark: '#131519',
      },
      secondary: {
        light: '#474f97',
        main: '#1a237e',
        dark: '#121858',
      },
    },
  });
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
