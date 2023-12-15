import { imgArray } from '../../components/create/images-imgArray.mjs';

export const validateCreate = async () => {
  try {
    let isOkay = true;

    const title = document.querySelector('#listing-title');
    const titleMessage = document.querySelector('#title-message');
    const titleMessageOriginal = 'Describe your listing in a few words.';

    const description = document.querySelector('#listing-description');
    const descriptionMessage = document.querySelector('#description-message');
    const descriptionMessageOriginal =
      'Try to accurately describe your item. Listings that have a good and detailed description are more likely to be sold.';

    const media = document.querySelector('#listing-media');
    const mediaMessage = document.querySelector('#media-message');
    const mediaMessageOriginal =
      'Add a link to an image of your item. You can add up to 8 images.';

    const titleRegex = /^[a-zA-Z0-9æøåÆØÅ\s]{5,50}$/;
    const descriptionRegex = /^[a-zA-Z0-9æøåÆØÅ\s,.!?-]{10,250}$/;

    if (!titleRegex.test(title.value)) {
      title.classList.remove('border-green-400');
      title.classList.add('border-red-400');

      titleMessage.textContent = 'Title must be between 5 and 50 characters';
      titleMessage.classList.remove('text-zinc-400');
      titleMessage.classList.add('text-red-400');

      isOkay = false;
      // throw new Error('Title must be between 5 and 50 characters');
    } else {
      title.classList.remove('border-red-400');
      title.classList.add('border-green-400');

      titleMessage.classList.remove('text-red-400');
      titleMessage.classList.add('text-zinc-400');

      titleMessage.textContent = titleMessageOriginal;
    }

    if (!descriptionRegex.test(description.value)) {
      description.classList.remove('border-green-400');
      description.classList.add('border-red-400');

      descriptionMessage.textContent =
        'Description must be between 10 and 250 characters';
      descriptionMessage.classList.remove('text-zinc-400');
      descriptionMessage.classList.add('text-red-400');

      isOkay = false;

      // throw new Error('Description must be between 10 and 250 characters');
    } else {
      description.classList.remove('border-red-400');
      description.classList.add('border-green-400');

      descriptionMessage.classList.remove('text-red-400');
      descriptionMessage.classList.add('text-zinc-400');

      descriptionMessage.textContent = descriptionMessageOriginal;
    }

    if (imgArray.length === 0) {
      media.classList.remove('border-green-400');
      media.classList.add('border-red-400');

      mediaMessage.textContent = 'You must add at least one image';
      mediaMessage.classList.remove('text-zinc-400');
      mediaMessage.classList.add('text-red-400');

      isOkay = false;

      // throw new Error('You must add at least one image');
    } else {
      media.classList.remove('border-red-400');

      mediaMessage.classList.remove('text-red-400');
      mediaMessage.classList.add('text-zinc-400');

      mediaMessage.textContent = mediaMessageOriginal;
    }

    return isOkay;
  } catch (error) {
    throw new Error(error);
  }
};
