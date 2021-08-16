/**
 * Bopomo main React component
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.09
 */
/*----- Imports --------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ProvideAuth, GuestRoute, PrivateRoute } from './utils/auth';
import { Home, Signup, Login, Show } from './pages';
import { Nav } from './components';
import './index.css';

/*----- Render App -----------------------------------------------------------*/
ReactDOM.render(
  <ProvideAuth>
    <Router>
      <Nav />
      <section>
        <Switch>
          <GuestRoute exact path="/login">
            <Login />
          </GuestRoute>
          <GuestRoute exact path="/signup">
            <Signup />
          </GuestRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/font/:id">
            <Show />
          </Route>
        </Switch>
      </section>
    </Router>
  </ProvideAuth>,
  document.querySelector('#root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
