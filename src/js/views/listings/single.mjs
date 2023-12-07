import { getSpecificListing } from '../../api/listing/listing.mjs';
import { singleListing } from '../../components/listings/single.mjs';

export const displaySingleListing = async () => {
  try {
    const data = await getSpecificListing();
    singleListing(data);
  } catch (error) {
    console.log(error);
  }
};
