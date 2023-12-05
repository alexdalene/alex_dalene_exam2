import { navbar } from '../components/navbar/navbar.mjs';
import { load } from '../storage/load.mjs';
import { loader } from '../components/loader/loader.mjs';
import { profile } from '../components/profile/profile.mjs';
import { checkAvatar } from '../functions/profile/update.mjs';

const render = async () => {
  try {
    const token = load('token');
    if (!token) {
      window.location.href = '/auth#signup';
    }

    loader.showLoader();
    await profile();
    await navbar();
    checkAvatar();
    loader.hideLoader();
  } catch (error) {
    console.error(error);
  }
};

render();
