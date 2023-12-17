import { getListings } from '../../api/listings/listings.js';
import { displayListings } from '../../views/listings/listings.js';
import { timeSinceSave } from './timeSinceSave.js';

/**
 * Checks the storage for cached posts and displays the listings.
 * If there are no cached posts or the cached posts are outdated, it fetches new listings.
 * @throws {Error} If an error occurs while fetching listings.
 */
export const checkStorage = async () => {
  try {
    const currentDate = Date.now();

    if (timeSinceSave(currentDate) || !localStorage.getItem('cachedPosts')) {
      await getListings();
      displayListings();
    } else {
      displayListings();
    }
  } catch (error) {
    throw new Error(error);
  }
};
