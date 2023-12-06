import { getSpecificListing } from '../api/listing/listing.mjs';
import { navbar } from '../components/navbar/navbar.mjs';
import { loader } from '../components/loader/loader.mjs';

const render = async () => {
  try {
    loader.showLoader();
    await getSpecificListing();
    await navbar();
    loader.hideLoader();
  } catch (error) {
    console.log(error);
  }
};

render();
