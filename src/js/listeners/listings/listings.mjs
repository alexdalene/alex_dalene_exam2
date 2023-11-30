import { getListings } from '../../api/listings/listings.mjs';
import { timeSinceSave } from '../../functions/listings/timeSinceSave.mjs';
import { deleteCache } from '../../storage/cache.mjs';
import { load } from '../../storage/load.mjs';
import { displayListings } from '../../views/listings/listings.mjs';

export const checkStorage = async () => {
  const currentDate = Date.now();

  if (timeSinceSave(currentDate) || !load('cachedPosts')) {
    console.log('Doing a new request');
    deleteCache();
    await getListings();
    displayListings();
  } else {
    console.log('Using cached posts');
    displayListings();
  }
};
