import { Route, RouteParams, Router, Switch } from '@react-nano/router';
import { type MatchResult, match } from 'path-to-regexp';
import Index from './pages/Index';
import Install from './pages/Install';
import NotFound from './pages/NotFound';

const routeMatcherFactory = (pattern: string) => {
  const matcher = match(pattern);

  return (path: string) => (matcher(path) as MatchResult<RouteParams>).params;
};

const App = () => (
  <Router routeMatcherFactory={routeMatcherFactory}>
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/install" component={Install} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
