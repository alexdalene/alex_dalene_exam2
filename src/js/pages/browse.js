import { navbar } from '../components/navbar/navbar.js';
import { displayListings } from '../views/listings/listings.js';
import { checkStorage } from '../functions/listings/checkStorage.js';
import { loader } from '../components/loader/loader.js';

loader.showLoader();

const render = async () => {
  try {
    await checkStorage();
    await navbar();
    loader.hideLoader();
    const searchInput = document.querySelector('#input-search');
    searchInput.addEventListener('keyup', e => displayListings(e.target.value));
  } catch (error) {
    console.log(error);
  }
};

render();
