import { clear } from '../../tools/clear.js';
import { loadOnScroll } from '../../listeners/listings/loadOnScroll.js';

export const displayAllListings = data => {
  clear('#listing-container');
  loadOnScroll(data);
};
