import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import App from './app/App';

const MainRoute = (): JSX.Element => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/app" component={App} />
    </Switch>
  </Router>
);

export default MainRoute;
