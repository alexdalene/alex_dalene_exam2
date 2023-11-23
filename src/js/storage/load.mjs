export const load = key => {
  if (typeof key !== 'string') {
    throw new Error('Please provide a valid input type');
  }

  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
