/**
 * User service methods.
 * @author Una Ada <una@anarhy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 * @module utils/users
 * @see module:utils/tokens
 */

/*----- Imports --------------------------------------------------------------*/
import tokenService from './tokenService';

/*----- Initialize -----------------------------------------------------------*/
const BASE_URL = '/api/users/';

/*----- Export Methods -------------------------------------------------------*/
export default {
  signup: user =>
    fetch(BASE_URL + 'signup', {
      method: 'POST',
      body: user,
    })
      .then(res => (res.ok ? rs.json() : new Error('Email already taken!')))
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
