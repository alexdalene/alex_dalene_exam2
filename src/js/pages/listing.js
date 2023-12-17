import { navbar } from '../components/navbar/navbar.js';
import { loader } from '../components/loader/loader.js';
import { displaySingleListing } from '../views/listings/single.js';

const render = async () => {
  try {
    loader.showLoader();
    await displaySingleListing();
    await navbar();
    loader.hideLoader();
  } catch (error) {
    console.log(error);
  }
};

render();
