/**
 * Stores posts in the cache and saves the current date.
 *
 * @param {Array} posts - The posts to be stored.
 * @returns {void}
 */
import { saveCache } from './cache.js';
import { save } from './save.js';

export const storePosts = posts => {
  const currentDate = Date.now();

  saveCache(posts);
  save('date', `${currentDate}`);
};
