export const saveCache = posts => {
  localStorage.setItem('cachedPosts', JSON.stringify(posts));
};

export const loadCache = () => {
  const cachedData = localStorage.getItem('cachedPosts');
  return cachedData ? JSON.parse(cachedData) : null;
};

export const deleteCache = () => {
  const cachedData = localStorage.getItem('cachedPosts');

  if (cachedData) {
    localStorage.removeItem('cachedPosts');
  }
};
