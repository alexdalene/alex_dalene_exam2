import { getListings } from '../../api/listings/get.mjs';
import { listing } from '../../components/listings/listing.mjs';

export async function listingListener() {
  const data = await getListings();
  listing(data);
}
