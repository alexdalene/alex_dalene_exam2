import { clear } from '../../tools/clear.js';
import { loadOnScroll } from '../../listeners/listings/loadOnScroll.js';

/**
 * Clears the listing container and loads data on scroll.
 *
 * @param {Array} data - The data to be displayed.
 * @returns {void}
 */
export const displayAllListings = data => {
  clear('#listing-container');
  loadOnScroll(data);
};
