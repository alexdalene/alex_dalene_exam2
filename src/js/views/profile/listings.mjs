import { getProfileListings } from '../../api/profile/listings.mjs';
import { listing } from '../../components/listings/listing.mjs';
import { displayAllListings } from '../../functions/listings/displayAllListings.mjs';
import { displayListings } from '../listings/listings.mjs';

export async function displayProfileListings() {
  try {
    const data = await getProfileListings();

    console.log(data);
    listing(data);
  } catch (error) {
    console.error('Error loading listings:', error);
  }
}
