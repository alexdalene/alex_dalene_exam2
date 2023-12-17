/**
 * Saves a key-value pair in the local storage.
 *
 * @param {string} key - The key to save.
 * @param {string} value - The value to save.
 * @throws {Error} If the input types are not valid.
 */
export const save = (key, value) => {
  if (typeof key !== 'string' || typeof value !== 'string') {
    throw new Error('Please provide a valid input type');
  }
  localStorage.setItem(key, value);
};
