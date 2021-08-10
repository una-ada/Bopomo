import React from 'react';
import { Switch } from 'react-router-dom';
import { Home, Signup, Login } from '../pages';
import { GuestRoute, PrivateRoute } from '../../utils/auth';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="content">
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
        </Switch>
      </div>
    </div>
  );
};

export default App;
