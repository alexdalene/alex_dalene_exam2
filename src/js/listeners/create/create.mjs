import { createListing } from '../../api/listing/create.mjs';

export async function createListener(event, images) {
  event.preventDefault();

  const form = event.target.closest('form');
  const data = new FormData(form);
  const title = data.get('listing-title');
  const description = data.get('listing-description');
  const tags = data.getAll('listing-tags');
  const endsAt = data.get('listing-deadline');
  const media = images;

  console.log(title, description, tags, endsAt, media);

  try {
    await createListing(title, description, tags, media, endsAt);
    console.log('Listing created');
  } catch (error) {
    console.log(error);
  }
}
