import { listing } from '../../components/listings/listing.mjs';
import { noListings } from '../../components/listings/noListings.mjs';

export const loadOnScroll = posts => {
  const postsPerPage = 9;
  let currentPage = 1;

  const renderPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToLoad = posts.slice(startIndex, endIndex);

    if (postsToLoad.length <= 0) {
      noListings();

      window.removeEventListener('scroll', scrollCheck);
    }

    listing(postsToLoad);

    currentPage++;
  };

  renderPosts();

  const scrollThreshold = 100;

  const scrollCheck = () => {
    const scrolledToBottom =
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight - scrollThreshold;

    if (scrolledToBottom) {
      renderPosts();
    }
  };

  window.addEventListener('scroll', scrollCheck);
};
