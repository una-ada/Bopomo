import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Signup, Login } from '../pages';
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
      <Switch>
        <Route exact path="/login">
          <Login handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>
        {userService.getUser() ? (
          <>
            <Switch>
              <Route exact path="/">
                Home PAGE COMPONENT WOULD GO HEREE
              </Route>
            </Switch>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </div>
  );
}

export default App;
