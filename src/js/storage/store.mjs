import { saveCache } from './cache.mjs';
import { save } from './save.mjs';

export const storePosts = posts => {
  const currentDate = Date.now();

  saveCache(posts);
  save('date', `${currentDate}`);
};
