import { navbar } from '../components/navbar/navbar.mjs';
import { displayListings } from '../views/listings/listings.mjs';
import { checkStorage } from '../functions/listings/checkStorage.mjs';
import { loader } from '../components/loader/loader.mjs';

const render = async () => {
  try {
    loader.showLoader();
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
