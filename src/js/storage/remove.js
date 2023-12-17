/**
 * Removes an item from the localStorage based on the provided key.
 *
 * @param {string} key - The key of the item to be removed.
 * @throws {Error} If the key is not a string.
 */
export const remove = key => {
  if (typeof key !== 'string') {
    throw new Error('Please provide a valid input type');
  }

  localStorage.removeItem(key);
};
