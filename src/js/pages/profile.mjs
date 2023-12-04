import { navbar } from '../components/navbar/navbar.mjs';
import { load } from '../storage/load.mjs';
import { loader } from '../components/loader/loader.mjs';
import { profile } from '../components/profile/profile.mjs';

const render = async () => {
  try {
    const token = load('token');
    if (!token) {
      window.location.href = '/auth#signup';
    }

    loader.showLoader();
    await profile();
    await navbar();
    loader.hideLoader();
  } catch (error) {
    console.error(error);
  }
};

render();
