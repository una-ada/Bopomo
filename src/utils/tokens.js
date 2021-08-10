/**
 * Token service methods
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.09
 * @since 2021.08.09
 * @module utils/tokens
 * @see module:utils/users
 */

/*----- Export Methods -------------------------------------------------------*/
/**
 * Get the user's session information as a JWT.
 * @returns {string} JWT with session information.
 */
const getToken = () =>
    (token =>
      token && JSON.parse(atob(token.split('.')[1])).exp < Date.now() / 1000
        ? // Remove expired tokens
          localStorage.removeItem('token') || (token = null)
        : // Return valid tokens
          token)(
      // Get JWT from local storage
      localStorage.getItem('token')
    ),
  tokenUtils = {
    /**
     * Update token in user storage
     * @param {string} token Updated token or empty to remove token.
     */
    setToken: token =>
      token
        ? // Update token in storage
          localStorage.setItem('token', token)
        : // Clear token if empty is passed
          localStorage.removeItem('token'),
    // This function needs to be declared outside of the export object because
    // it's called by the getUserFromToken function.
    getToken,
    /**
     * Clear the user's session token.
     * @returns {undefined}
     */
    removeToken: () => localStorage.removeItem('token'),
    /**
     * Get the user information from the session JWT.
     * @returns {object} User object stored in the session.
     */
    getUserFromToken: () =>
      (token => (token ? JSON.parse(atob(token.split('.')[1])).user : null))(
        getToken()
      ),
  };

export default tokenUtils;
