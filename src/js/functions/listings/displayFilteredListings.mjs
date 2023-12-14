import { clear } from '../../tools/clear.mjs';
import { listing } from '../../components/listings/listing.mjs';

export const displayFilteredListings = (data, searchValue) => {
  const filteredListings = data.filter(listing =>
    listing.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  console.log(filteredListings);
  clear('#listing-container');
  listing(filteredListings);
  onscroll = null;
};
