export const select = element => {
  if (!element) {
    return null;
  }

  const selected = document.querySelector(element);
  return selected;
};
