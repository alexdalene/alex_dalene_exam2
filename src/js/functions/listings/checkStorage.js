import { getListings } from '../../api/listings/listings.js';
import { displayListings } from '../../views/listings/listings.js';
import { timeSinceSave } from './timeSinceSave.js';

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
