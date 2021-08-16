/**
 * Font API Library
 * @author Una Ada <una@anarchy.website>
 * @version 2021.08.11
 * @since 2021.08.11
 * @module utils/fonts
 * @see module:utils/tokens
 */

/*----- Imports --------------------------------------------------------------*/
import tokenService from '../utils/tokens';

/*----- Constants ------------------------------------------------------------*/
const BASE_URL = '/api/fonts/';

export const create = body =>
  new Promise((resolve, reject) =>
    fetch(BASE_URL, {
      method: 'POST',
      body,
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
    }).then(res =>
      res.json().then(obj => (res.ok ? resolve(obj) : reject(obj)))
    )
  );

export const index = () =>
  new Promise((resolve, reject) =>
    fetch(BASE_URL, {
      method: 'GET',
    }).then(res =>
      res.json().then(obj => (res.ok ? resolve(obj) : reject(obj)))
    )
  );

export const show = id =>
  new Promise((resolve, reject) =>
    fetch(BASE_URL + id, {
      method: 'GET',
    }).then(res =>
      res.json().then(obj => (res.ok ? resolve(obj) : reject(obj)))
    )
  );
