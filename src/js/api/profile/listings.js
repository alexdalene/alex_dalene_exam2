import { apiBase } from '../base.js';
import { headers } from '../headers.js';
import { load } from '../../storage/load.js';

/**
 * Retrieves the listings associated with the user's profile.
 * @async
 * @function getProfileListings
 * @returns {Promise<Object>} The response data containing the user's listings.
 * @throws {Error} If the response is not successful, an error is thrown with the corresponding error message.
 */
export async function getProfileListings() {
  const username = load('username');
  const response = await fetch(
    `${apiBase}/auction/profiles/${username}/listings?_bids=true`,
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

  return data;
}
