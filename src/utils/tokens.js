/**
 * Token service methods
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 * @module utils/tokens
 * @see module:utils/users
 */

/*----- Export Methods -------------------------------------------------------*/
const getToken = _ =>
  (token =>
    token && JSON.parse(atob(token.split('.')[1])).exp < Date.now() / 1000
      ? localStorage.removeItem('token') || (token = null)
      : token)(localStorage.getItem('token'));
export default {
  setToken: token =>
    token
      ? localStorage.setItem('token', token)
      : localStorage.removeItem('token'),
  getToken,
  removeToken: _ => localStorage.removeItem('token'),
  getUserFromToken: _ =>
    (token => (token ? JSON.parse(atob(token.split('.')[1])).user : null))(
      getToken()
    ),
};
