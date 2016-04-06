import React        from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
  // browserHistory
}                   from 'react-router';
import App          from '../containers/app/App.jsx';
// import {
//   Dashboard,
//   LastFiche,
//   Compose,
//   Mailbox,
//   Readmail
// }                   from '../views/index.js';

import {
  Dashboard //,
  // LastFiche,
  // Compose,
  // Mailbox,
  // Readmail
} from '../views';


export const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />

      </Route>
    </Router>
  );
};
