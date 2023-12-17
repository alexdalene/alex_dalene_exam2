/**
 * Renders a child element inside a parent element.
 *
 * @param {string} parent - The selector for the parent element.
 * @param {Element} child - The child element to be rendered.
 * @param {boolean} clear - Determines whether to clear the parent element before rendering the child element.
 * @returns {void}
 */
export const view = (parent, child, clear) => {
  if (!parent || !child) {
    return null;
  }

  const element = document.querySelector(parent);

  if (clear === true) {
    element.innerHTML = '';
  }

  element.appendChild(child);
};
