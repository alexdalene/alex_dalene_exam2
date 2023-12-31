import { apiBase } from '../base.js';
import { headers } from '../headers.js';

/**
 * Retrieves a specific listing from the API.
 * @returns {Promise<Object>} The data of the specific listing.
 * @throws {Error} If the API response is not successful.
 */
export async function getSpecificListing() {
  const url = new URL(location.href);
  let id = url.searchParams.get('id').toString();

  const response = await fetch(
    `${apiBase}/auction/listings/${id}?_seller=true&_bids=true`,
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
