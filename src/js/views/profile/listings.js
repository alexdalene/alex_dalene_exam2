import { getProfileListings } from '../../api/profile/listings.js';
import { listing } from '../../components/listings/listing.js';

/**
 * Displays the profile listings.
 * @async
 * @function displayProfileListings
 * @returns {Promise<void>} A promise that resolves when the profile listings are displayed.
 * @throws {Error} If there is an error loading the listings.
 */
export async function displayProfileListings() {
  try {
    const data = await getProfileListings();

    listing(data);
  } catch (error) {
    console.error('Error loading listings:', error);
  }
}
