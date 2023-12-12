import { appendImages } from '../../components/create/images.mjs';

export const getImageValue = () => {
  const input = document.querySelector('#listing-media');

  if (!input.value) return;

  appendImages(input.value);
  input.value = '';
};
