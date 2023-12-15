import { appendImage } from './images-appendImage.mjs';
import { imgArray } from './images-imgArray.mjs';

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
