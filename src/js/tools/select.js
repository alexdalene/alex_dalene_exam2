/**
 * Selects an element from the DOM based on the provided selector.
 *
 * @param {string} element - The selector used to identify the element.
 * @returns {Element|null} - The selected element or null if no element is found.
 */
export const select = element => {
  if (!element) {
    return null;
  }

  const selected = document.querySelector(element);
  return selected;
};
