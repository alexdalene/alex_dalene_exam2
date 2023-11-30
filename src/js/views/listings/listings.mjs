import { listing } from '../../components/listings/listing.mjs';
import { loadCache } from '../../storage/cache.mjs';
import { clear } from '../../tools/clear.mjs';

export async function displayListings(searchValue) {
  const data = await loadCache();
  console.log(data);

  if (searchValue) {
    const filtered = data.filter(listing =>
      listing.title.includes(searchValue),
    );

    clear('#listing-container');
    listing(filtered);
  } else if (!searchValue) {
    clear('#listing-container');
    listing(data);
  }
}
