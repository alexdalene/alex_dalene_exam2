import { getSpecificListing } from '../api/listing/listing.mjs';

const render = async () => {
  try {
    await getSpecificListing();
  } catch (error) {
    console.log(error);
  }
};

render();
