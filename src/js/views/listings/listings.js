import { displayAllListings } from '../../functions/listings/displayAllListings.js';
import { displayFilteredListings } from '../../functions/listings/displayFilteredListings.js';
import { loadCache } from '../../storage/cache.js';

/**
 * Displays the listings based on the search value.
 * If a search value is provided, it filters and displays the listings.
 * If no search value is provided, it displays all the listings with infinite scroll.
 *
 * @param {string} searchValue - The value to search for in the listings.
 * @returns {Promise<void>} - A promise that resolves when the listings are displayed.
 */
export async function displayListings(searchValue) {
  try {
    const data = await loadCache();

    if (searchValue) {
      // Filter and display listings based on searchValue
      displayFilteredListings(data, searchValue);
    } else {
      // Display all listings with infinite scroll
      displayAllListings(data);
    }
  } catch (error) {
    console.error('Error loading listings:', error);
  }
}
