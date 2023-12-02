import { getListings } from '../../api/listings/listings.mjs';
import { displayListings } from '../../views/listings/listings.mjs';
import { timeSinceSave } from './timeSinceSave.mjs';

export const checkStorage = () => {
  const currentDate = Date.now();

  if (timeSinceSave(currentDate)) {
    getListings();
    displayListings();
  } else {
    console.log('Using cached data');
    displayListings();
  }
};
