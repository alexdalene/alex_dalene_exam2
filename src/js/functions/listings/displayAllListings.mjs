import { clear } from '../../tools/clear.mjs';
import { loadOnScroll } from '../../listeners/listings/loadOnScroll.mjs';

export const displayAllListings = data => {
  clear('#listing-container');
  loadOnScroll(data);
};
