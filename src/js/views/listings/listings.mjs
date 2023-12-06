import { listing } from '../../components/listings/listing.mjs';
import { loadCache } from '../../storage/cache.mjs';
import { clear } from '../../tools/clear.mjs';

export async function displayListings(searchValue) {
  try {
    const data = await loadCache();

    if (searchValue) {
      const filtered = data.filter(listing =>
        listing.title.toLowerCase().includes(searchValue.toLowerCase()),
      );

      console.log(filtered);
      clear('#listing-container');
      listing(filtered);
    } else if (!searchValue) {
      clear('#listing-container');
      listing(data);
    }
  } catch (error) {
    console.log(error);
  }
}
