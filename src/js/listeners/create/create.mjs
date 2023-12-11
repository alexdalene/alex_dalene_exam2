import { createListing } from '../../api/listing/create.mjs';
import { validate } from './validate.mjs';

export async function createListener(event, images) {
  event.preventDefault();

  const form = event.target.closest('form');
  const data = new FormData(form);
  const title = data.get('listing-title');
  const description = data.get('listing-description');
  const tags = data.getAll('listing-tags');
  const endsAt = data.get('listing-deadline');
  const media = images;

  if (!validate()) return;

  try {
    const result = await createListing(title, description, tags, media, endsAt);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
