import { apiBase } from '../base.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';

/**
 * Updates the avatar of the user's profile.
 * @param {string} avatar - The URL of the new avatar image.
 * @returns {Promise<Object>} - The updated profile data.
 * @throws {Error} - If there is an error updating the avatar.
 */
export async function updateAvatar(avatar) {
  const username = load('username');
  const response = await fetch(
    `${apiBase}/auction/profiles/${username}/media`,
    {
      method: 'put',
      body: JSON.stringify({ avatar }),
      headers: headers('application/json'),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  return data;
}
