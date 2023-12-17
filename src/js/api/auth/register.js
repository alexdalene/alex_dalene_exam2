import { apiBase } from '../base.js';
import { headers } from '../headers.js';
import { handleErrors } from '../../functions/auth/handleErrors.js';

/**
 * Registers a user with the provided name, email, password, and avatar.
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @param {string} avatar - The avatar of the user.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 * @throws {Error} - If there is an error during the registration process.
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
