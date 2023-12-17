import { saveCache } from './cache.js';
import { save } from './save.js';

export const storePosts = posts => {
  const currentDate = Date.now();

  saveCache(posts);
  save('date', `${currentDate}`);
};
