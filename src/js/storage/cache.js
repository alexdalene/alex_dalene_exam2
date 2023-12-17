/**
 * Saves the cache of posts to the local storage.
 * @param {Array} posts - The array of posts to be cached.
 */
export const saveCache = posts => {
  localStorage.setItem('cachedPosts', JSON.stringify(posts));
};

/**
 * Loads the cached posts from the local storage.
 * @returns {Array|null} - The cached posts, or null if no cache is found.
 */
export const loadCache = () => {
  const cachedData = localStorage.getItem('cachedPosts');
  return cachedData ? JSON.parse(cachedData) : null;
};

/**
 * Deletes the cached posts from the local storage.
 */
export const deleteCache = () => {
  const cachedData = localStorage.getItem('cachedPosts');

  if (cachedData) {
    localStorage.removeItem('cachedPosts');
  }
};
