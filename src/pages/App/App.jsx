import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home, Signup, Login } from '../pages';
import userService from '../../utils/users';

function App() {
  const [user, setUser] = useState(userService.getUser()),
    handleSignUpOrLogin = () => setUser(userService.getUser()),
    handleLogout = () => {
      userService.logout();
      setUser({ user: null });
    };

  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/login">
            <Login handleSignUpOrLogin={handleSignUpOrLogin} />
          </Route>
          <Route exact path="/signup">
            <Signup handleSignUpOrLogin={handleSignUpOrLogin} />
          </Route>
          {user ? (
            <>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </div>
    </div>
  );
}

export default App;
