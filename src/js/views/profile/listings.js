import { getProfileListings } from '../../api/profile/listings.js';
import { listing } from '../../components/listings/listing.js';
import { displayAllListings } from '../../functions/listings/displayAllListings.js';
import { displayListings } from '../listings/listings.js';

export async function displayProfileListings() {
  try {
    const data = await getProfileListings();

    listing(data);
  } catch (error) {
    console.error('Error loading listings:', error);
  }
}
