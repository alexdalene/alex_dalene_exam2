import { getSpecificListing } from '../../api/listing/listing.mjs';
import { singleListing } from '../../components/listings/single.mjs';
import { displayAllListings } from '../../functions/listings/displayAllListings.mjs';
import { loadCache } from '../../storage/cache.mjs';

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
