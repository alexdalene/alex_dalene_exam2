export const clear = element => {
  if (!element) {
    return null;
  }

  const selected = document.querySelector(element);
  selected.innerHTML = '';
};
