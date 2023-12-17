/**
 * Loads the value associated with the given key from the localStorage.
 * @param {string} key - The key to retrieve the value from localStorage.
 * @returns {string|null} - The value associated with the key, or null if the key does not exist or an error occurs.
 * @throws {Error} - If the key is not a string.
 */
export const load = key => {
  if (typeof key !== 'string') {
    throw new Error('Please provide a valid input type');
  }

  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
