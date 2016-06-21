import * as React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// import views to use with React Router
import App from './components/App';

class Routes extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

export default Routes;
