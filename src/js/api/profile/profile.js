import { apiBase } from '../base.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';
import { save } from '../../storage/save.js';

/**
 * Retrieves the profile data for a user.
 * @returns {Promise<Object>} The profile data.
 * @throws {Error} If there is an error retrieving the profile data.
 */
export async function getProfile() {
  const username = load('username');
  const response = await fetch(
    `${apiBase}/auction/profiles/${username ? username : 'sherlock'}`,
    {
      method: 'get',
      body: JSON.stringify(),
      headers: headers('application/json'),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  save('credits', `${data.credits}`);
  return data;
}
