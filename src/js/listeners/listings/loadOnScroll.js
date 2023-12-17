import { listing } from '../../components/listings/listing.js';
import { noListings } from '../../components/listings/noListings.js';

export const loadOnScroll = posts => {
  const postsPerPage = 9;
  let currentPage = 1;

  const renderPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToLoad = posts.slice(startIndex, endIndex);

    if (postsToLoad.length <= 0) {
      noListings();

      onscroll = null;
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

  onscroll = scrollCheck;
};
