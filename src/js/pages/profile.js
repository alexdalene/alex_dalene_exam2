import { navbar } from '../components/navbar/navbar.js';
import { load } from '../storage/load.js';
import { loader } from '../components/loader/loader.js';
import { profile } from '../components/profile/profile.js';
import { displayProfileListings } from '../views/profile/listings.js';

loader.showLoader();

/**
 * Renders the profile page.
 *
 * @async
 * @function renderProfile
 * @returns {Promise<void>} A promise that resolves when the profile page is rendered.
 * @throws {Error} If there is an error rendering the profile page.
 */
export const renderProfile = async () => {
  try {
    const token = load('token');
    if (!token) {
      window.location.href = '/auth#signup';
    }

    await profile();
    await navbar();
    await displayProfileListings();
    loader.hideLoader();
  } catch (error) {
    console.error(error);
  }
};

renderProfile();
