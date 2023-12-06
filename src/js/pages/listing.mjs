import { getSpecificListing } from '../api/listing/listing.mjs';
import { navbar } from '../components/navbar/navbar.mjs';
import { loader } from '../components/loader/loader.mjs';
import { checkStorage } from '../functions/listings/checkStorage.mjs';

const render = async () => {
  try {
    loader.showLoader();
    await getSpecificListing();
    await checkStorage();
    await navbar();
    loader.hideLoader();
  } catch (error) {
    console.log(error);
  }
};

render();
