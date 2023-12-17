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
