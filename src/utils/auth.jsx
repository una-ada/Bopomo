/**
 * Authentication router wrapper and helper functions
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 *
 * Refactored from the example given here:
 * {@link https://reactrouter.com/web/example/auth-workflow}
 */

/*----- Imports --------------------------------------------------------------*/
import { createContext, useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import userService from './users';

/*----- Helper Functions -----------------------------------------------------*/
const authCtx = createContext();
export function useProvideAuth() {
  const [user, setUser] = useState(userService.getUser());
  return {
    user,
    signup: user =>
      new Promise((resolve, reject) => {
        userService
          .signup(user)
          .then(() => setUser(userService.getUser()) || resolve())
          .catch(err => reject(err));
      }),
    login: cred =>
      new Promise(async (resolve, reject) => {
        try {
          await userService.login(cred);
          setUser(userService.getUser());
          resolve();
        } catch (err) {
          reject(err);
        }
      }),
    logout: () =>
      new Promise((resolve, reject) => {
        userService.logout();
        setUser(null);
        resolve();
      }),
  };
}
export function useAuth() {
  return useContext(authCtx);
}

/*----- Components -----------------------------------------------------------*/
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authCtx.Provider value={auth}>{children}</authCtx.Provider>;
}
export function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
export function GuestRoute({ children, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
}
