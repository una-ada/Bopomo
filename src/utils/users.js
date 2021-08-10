/**
 * User service methods.
 * @author Una Ada <una@anarhy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 * @module utils/users
 * @see module:utils/tokens
 */

/*----- Imports --------------------------------------------------------------*/
import tokenService from './tokens';

/*----- Methods --------------------------------------------------------------*/
const BASE_URL = '/api/users/',
  userUtils = {
    signup: user =>
      fetch(BASE_URL + 'signup', {
        method: 'POST',
        body: user,
      })
        .then(res => {
          if (res.ok) return res.json();
          else throw new Error('Email taken!');
        })
        .then(({ token }) => tokenService.setToken(token)),
    login: cred =>
      fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(cred),
      })
        .then(res => {
          if (res.ok) return res.json();
          else throw new Error('Bad Credentials!');
        })
        .then(({ token }) => tokenService.setToken(token)),
    logout: _ => tokenService.removeToken(),
    getUser: _ => tokenService.getUserFromToken(),
  };

/*----- Exports --------------------------------------------------------------*/
export default userUtils;
