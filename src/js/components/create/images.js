import { appendImage } from './images-appendImage.js';
import { imgArray } from './images-imgArray.js';

/**
 * Appends an image to the gallery.
 *
 * @param {string} image - The image URL to be appended.
 * @returns {void}
 */
export const appendImages = image => {
  const gallery = document.querySelector('#listing-gallery');
  const message = document.querySelector('#media-message');

  if (imgArray.length >= 8) {
    message.textContent = 'You can only add 8 images';
    message.classList.remove('text-zinc-400');
    message.classList.add('text-red-400');
    return;
  }

  appendImage(image, gallery);
};
