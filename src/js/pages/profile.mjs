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

const update = document.querySelector('#update-avatar');
const button = document.querySelector('#update-button');

button.addEventListener('click', () => {
  if (button.textContent === 'check') {
    if (update.value && typeof update.value === 'string') {
      console.log(update.value);
      update.value = '';
    }
    button.textContent = 'edit';
  } else {
    button.textContent = 'check';
  }
});
