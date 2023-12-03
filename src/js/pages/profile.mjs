import { navbar } from '../components/navbar/navbar.mjs';
import { load, remove } from '../storage/index.mjs';
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

  const logout = document.querySelector('#btn-logout');

  logout.addEventListener('click', () => {
    remove('token');
    remove('username');
    remove('credits');
    window.location.href = '/auth#login';
  });
};

render();
