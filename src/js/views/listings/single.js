import { getSpecificListing } from '../../api/listing/listing.js';
import { singleListing } from '../../components/listings/single.js';
import { displayAllListings } from '../../functions/listings/displayAllListings.js';
import { loadCache } from '../../storage/cache.js';

/**
 * Display a single listing.
 * @async
 * @function displaySingleListing
 * @returns {Promise<void>} A promise that resolves when the single listing is displayed.
 * @throws {Error} If there is an error while displaying the single listing.
 */
export const displaySingleListing = async () => {
  try {
    const data = await getSpecificListing();
    const listings = await loadCache();

    listings.filter(listing => {
      if (listing.id === data.id) {
        const index = listings.indexOf(listing);
        listings.splice(index, 1);
        return listings;
      }
    });

    displayAllListings(listings);
    singleListing(data);
  } catch (error) {
    console.log(error);
  }
};
