import { navbar } from '../components/navbar/navbar.js';
import { loader } from '../components/loader/loader.js';
import { displaySingleListing } from '../views/listings/single.js';

loader.showLoader();

const render = async () => {
  try {
    await displaySingleListing();
    await navbar();
    loader.hideLoader();
  } catch (error) {
    console.log(error);
  }
};

render();
