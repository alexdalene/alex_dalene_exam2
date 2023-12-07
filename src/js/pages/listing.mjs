import { navbar } from '../components/navbar/navbar.mjs';
import { loader } from '../components/loader/loader.mjs';
import { checkStorage } from '../functions/listings/checkStorage.mjs';
import { displaySingleListing } from '../views/listings/single.mjs';

const render = async () => {
  try {
    loader.showLoader();
    await displaySingleListing();
    await checkStorage();
    await navbar();
    loader.hideLoader();
  } catch (error) {
    console.log(error);
  }
};

render();
