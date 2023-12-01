import { apiBase } from '../base.mjs';
import { headers } from '../headers.mjs';
import { handleErrors } from '../../functions/auth/handleErrors.mjs';

/**
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {string} avatar
 * @returns {Promise<object>}
 * @description Register a new user
 */
export async function register(name, email, password, avatar) {
  const response = await fetch(`${apiBase}/auction/auth/register`, {
    method: 'post',
    body: JSON.stringify({ name, email, password, avatar }),
    headers: headers('application/json'),
  });

  if (!response.ok) {
    const data = await response.json();
    handleErrors(data);
    throw new Error(data.errors[0].message);
  }

  return await response.json();
}
