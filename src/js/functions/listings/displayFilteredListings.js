import { clear } from '../../tools/clear.js';
import { listing } from '../../components/listings/listing.js';

/**
 * Displays filtered listings based on the search value.
 *
 * @param {Array} data - The array of listings data.
 * @param {string} searchValue - The search value to filter the listings.
 * @returns {void}
 */
export const displayFilteredListings = (data, searchValue) => {
  const filteredListings = data.filter(listing =>
    listing.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  clear('#listing-container');
  listing(filteredListings);
  onscroll = null;
};
