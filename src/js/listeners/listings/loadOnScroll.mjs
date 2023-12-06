import { listing } from '../../components/listings/listing.mjs';

export const loadOnScroll = posts => {
  const postsPerPage = 9;
  let currentPage = 1;

  const renderPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToLoad = posts.slice(startIndex, endIndex);

    if (postsToLoad.length <= 0) {
      return null;
    }

    listing(postsToLoad);

    currentPage++;
  };

  renderPosts();

  const scrollThreshold = 100;

  window.addEventListener('scroll', () => {
    const scrolledToBottom =
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight - scrollThreshold;

    if (scrolledToBottom) {
      console.log('scroll');
      renderPosts();
    }
  });
};
