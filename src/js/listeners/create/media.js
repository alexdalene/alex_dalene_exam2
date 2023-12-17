import { appendImages } from '../../components/create/images.js';

/**
 * Retrieves the value from the input field with the ID 'listing-media',
 * appends the images based on the retrieved value, and clears the input field.
 */
export const getImageValue = () => {
  const input = document.querySelector('#listing-media');

  if (!input.value) return;

  appendImages(input.value);
  input.value = '';
};
