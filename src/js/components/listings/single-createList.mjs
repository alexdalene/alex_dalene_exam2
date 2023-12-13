// Helper function to create list item
export const createListItem = (label, value) => {
  const listItem = document.createElement('li');
  listItem.classList.add('grid', 'grid-flow-col');

  const labelElement = document.createElement('span');
  // labelElement.classList.add('font-normal');
  labelElement.textContent = label;

  const valueElement = document.createElement('span');
  valueElement.classList.add('text-right', 'text-zinc-400');
  valueElement.textContent = value;

  listItem.appendChild(labelElement);
  listItem.appendChild(valueElement);

  return listItem;
};
