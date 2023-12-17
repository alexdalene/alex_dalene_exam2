import { clear } from '../../tools/clear.js';
import { listing } from '../../components/listings/listing.js';

export const displayFilteredListings = (data, searchValue) => {
  const filteredListings = data.filter(listing =>
    listing.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  clear('#listing-container');
  listing(filteredListings);
  onscroll = null;
};
