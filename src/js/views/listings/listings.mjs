import { displayAllListings } from '../../functions/listings/displayAllListings.mjs';
import { displayFilteredListings } from '../../functions/listings/displayFilteredListings.mjs';
import { loadCache } from '../../storage/cache.mjs';

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
