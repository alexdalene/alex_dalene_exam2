import { createListing } from '../../api/listing/create.js';
import { imgArray } from '../../components/create/images-imgArray.js';

/**
 * Handles the event when the create form is submitted.
 *
 * @param {Event} event - The event object.
 * @returns {Promise} - A promise that resolves with the result of creating the listing.
 */
export async function createListener(event) {
  event.preventDefault();

  const form = event.target.closest('form');
  const data = new FormData(form);
  const title = data.get('listing-title');
  const description = data.get('listing-description');
  const tags = data.getAll('listing-tags');
  const endsAt = data.get('listing-deadline');
  const media = imgArray;

  try {
    const result = await createListing(title, description, tags, media, endsAt);
    return result;
  } catch (error) {
    console.log(error);
  }
}
