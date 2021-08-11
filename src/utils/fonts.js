/**
 * Font API Library
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.11
 * @module utils/fonts
 * @see module:utils/tokens
 */

/*----- Imports --------------------------------------------------------------*/
import tokenService from './tokens';

/*----- Constants ------------------------------------------------------------*/
const BASE_URL = '/api/fonts';

export const create = font => {
  return fetch(BASE_URL, {
    method: 'POST',
    body: font,
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  
  }).then(res => res.json());
}
