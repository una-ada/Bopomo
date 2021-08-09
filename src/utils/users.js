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

/*----- Initialize -----------------------------------------------------------*/
const BASE_URL = '/api/users/';

/*----- Export Methods -------------------------------------------------------*/
export default {
  signup: user =>
    fetch(BASE_URL + 'signup', {
      method: 'POST',
      body: user,
    })
      .then(res => {
        if (res.ok) res.json();
        // This error is too generic, need to add better handling!
        else throw new Error('Email already taken!');
      })
      .then(({ token }) => tokenService.setToken(token)),
  login: cred =>
    fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(cred),
    })
      .then(res => (res.ok ? res.json() : new Error('Bad Credentials!')))
      .then(({ token }) => tokenService.setToken(token)),
  logout: _ => tokenService.removeToken(),
  getUser: _ => tokenService.getUserFromToken(),
};
