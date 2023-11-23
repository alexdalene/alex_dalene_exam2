export const clear = element => {
  if (!element) {
    return null;
  }

  element.innerHTML = '';
};
