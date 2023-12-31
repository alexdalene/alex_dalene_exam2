/**
 * Helper function to create a list item.
 *
 * @param {string} label - The label for the list item.
 * @param {string} value - The value for the list item.
 * @returns {HTMLLIElement} The created list item element.
 */
export const createListItem = (label, value) => {
  const listItem = document.createElement('li');
  listItem.classList.add('grid', 'grid-flow-col');

  const labelElement = document.createElement('span');
  // labelElement.classList.add('font-normal');
  labelElement.textContent = label;

  const valueElement = document.createElement('span');
  valueElement.classList.add('text-right', 'text-zinc-400', 'line-clamp-1');
  valueElement.textContent = value;

  listItem.appendChild(labelElement);
  listItem.appendChild(valueElement);

  return listItem;
};
