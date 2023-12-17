import { imgArray } from '../../components/create/images-imgArray.js';

/**
 * Validates the input fields for creating a listing.
 * @returns {Promise<boolean>} Returns a promise that resolves to a boolean indicating whether the input fields are valid or not.
 * @throws {Error} Throws an error if there is an issue with the validation process.
 */
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

    const deadline = document.querySelector('#listing-deadline');
    const deadlineMessage = document.querySelector('#deadline-message');
    const deadlineMessageOriginal =
      '            Add a deadline. The listing will be automatically closed when it is reached.';

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

    if (deadline.value === '') {
      deadline.classList.remove('border-green-400');
      deadline.classList.add('border-red-400');

      deadlineMessage.textContent = 'You must add a deadline';
      deadlineMessage.classList.remove('text-zinc-400');
      deadlineMessage.classList.add('text-red-400');

      isOkay = false;
    } else {
      deadline.classList.remove('border-red-400');
      deadline.classList.add('border-green-400');

      deadlineMessage.classList.remove('text-red-400');
      deadlineMessage.classList.add('text-zinc-400');

      deadlineMessage.textContent = deadlineMessageOriginal;
    }

    return isOkay;
  } catch (error) {
    throw new Error(error);
  }
};
