export const remove = key => {
  if (typeof key !== 'string') {
    throw new Error('Please provide a valid input type');
  }

  localStorage.removeItem(key);
};
