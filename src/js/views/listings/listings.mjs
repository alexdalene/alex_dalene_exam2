import { listing } from '../../components/listings/listing.mjs';
import { loadCache } from '../../storage/cache.mjs';
import { clear } from '../../tools/clear.mjs';

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
