import { apiBase } from '../base.js';
import { headers } from '../headers.js';

/**
 * Creates a new listing.
 *
 * @param {string} title - The title of the listing.
 * @param {string} description - The description of the listing.
 * @param {string[]} tags - The tags associated with the listing.
 * @param {string[]} media - The media files associated with the listing.
 * @param {string} endsAt - The end date and time of the listing.
 * @returns {Promise<Object>} - A promise that resolves to the created listing data.
 * @throws {Error} - If there is an error creating the listing.
 */
export async function createListing(title, description, tags, media, endsAt) {
  const response = await fetch(`${apiBase}/auction/listings`, {
    method: 'post',
    body: JSON.stringify({ title, description, tags, media, endsAt }),
    headers: headers('application/json'),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  return data;
}
