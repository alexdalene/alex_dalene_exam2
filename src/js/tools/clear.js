/**
 * Clears the content of the specified element.
 *
 * @param {string} element - The CSS selector of the element to be cleared.
 * @returns {null} Returns null if the element is not found.
 */
export const clear = element => {
  if (!element) {
    return null;
  }

  const selected = document.querySelector(element);
  selected.innerHTML = '';
};
