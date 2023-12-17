export const save = (key, value) => {
  if (typeof key !== 'string' || typeof value !== 'string') {
    throw new Error('Please provide a valid input type');
  }
  localStorage.setItem(key, value);
};
