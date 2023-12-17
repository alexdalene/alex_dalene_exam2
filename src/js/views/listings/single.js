import { getSpecificListing } from '../../api/listing/listing.js';
import { singleListing } from '../../components/listings/single.js';
import { displayAllListings } from '../../functions/listings/displayAllListings.js';
import { loadCache } from '../../storage/cache.js';

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
