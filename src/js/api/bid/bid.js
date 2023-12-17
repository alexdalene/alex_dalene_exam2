import { apiBase } from '../base.js';
import { headers } from '../headers.js';

/**
 * Makes a bid on a listing.
 * @param {number} amount - The amount to bid.
 * @returns {Promise<Object>} - The bid response data.
 * @throws {Error} - If there is an error making the bid.
 */
export async function bidOnListing(amount) {
  const url = new URL(location.href);
  let id = url.searchParams.get('id').toString();

  const response = await fetch(`${apiBase}/auction/listings/${id}/bids`, {
    method: 'post',
    body: JSON.stringify({ amount }),
    headers: headers('application/json'),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  return data;
}
