import { updateAvatar } from '../../api/profile/update.js';
import { renderProfile } from '../../pages/profile.js';
import { select } from '../../tools/select.js';

export const profileEdit = avatar => {
  // Create main container element
  const mainContainer = document.createElement('div');
  mainContainer.classList.add(
    'fixed',
    'inset-0',
    'z-50',
    'grid',
    'min-h-[100svh]',
    'place-content-center',
    'bg-zinc-900',
  );

  // Create form element
  const formElement = document.createElement('form');
  formElement.action = '';
  formElement.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'gap-10',
    'text-zinc-200',
  );

  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('relative', 'w-60', 'p-1.5');

  // Create image element
  const imageElement = document.createElement('img');
  imageElement.src = avatar;
  imageElement.alt = '';
  imageElement.classList.add(
    'aspect-square',
    'h-full',
    'w-full',
    'rounded-full',
    'object-cover',
  );

  // Create border for the image
  const imageBorder = document.createElement('div');
  imageBorder.id = 'image-border';
  imageBorder.classList.add(
    'absolute',
    'inset-0',
    'rounded-full',
    'border-2',
    'border-dashed',
    'border-purple-300',
  );

  // Append image and border to the image container
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(imageBorder);

  // Append image container to the form element
  formElement.appendChild(imageContainer);

  // Create URL input element
  const urlInput = document.createElement('input');
  urlInput.type = 'url';
  urlInput.id = 'listing-media';
  urlInput.name = 'listing-media';
  urlInput.placeholder = 'https://';
  urlInput.autocomplete = 'off';
  urlInput.classList.add(
    'rounded-md',
    'border',
    'border-zinc-800',
    'bg-zinc-800',
    'px-2.5',
    'py-2.5',
    'placeholder-zinc-600',
    'transition',
    'duration-300',
    'focus:border-purple-300',
    'focus:outline-none',
    'w-full',
  );
  urlInput.addEventListener('input', () => {
    if (!urlInput.value) {
      urlInput.classList.add('border-red-500');
    } else {
      urlInput.classList.remove('border-red-500');
    }

    submitButton.disabled = false;
    imageElement.src = urlInput.value;
  });

  // Create buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add(
    'flex',
    'justify-between',
    'gap-2.5',
    'w-full',
  );

  // Create Cancel button
  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.classList.add(
    'w-full',
    'rounded-xl',
    'border',
    'border-zinc-600',
    'px-2.5',
    'py-2',
  );
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', () => {
    mainContainer.remove();
  });

  // Create Submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.disabled = true;
  submitButton.classList.add(
    'w-full',
    'rounded-xl',
    'bg-zinc-200',
    'px-2.5',
    'py-2',
    'text-zinc-900',
    'disabled:opacity-50',
  );
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', async e => {
    e.preventDefault();

    select('#image-border').classList.add('animate-spin');
    await updateAvatar(urlInput.value);

    select('#image-border').classList.remove('animate-spin');
    mainContainer.remove();
    renderProfile();
  });

  // Append buttons to the buttons container
  buttonsContainer.appendChild(cancelButton);
  buttonsContainer.appendChild(submitButton);

  // Append URL input and buttons container to the form element
  formElement.appendChild(urlInput);
  formElement.appendChild(buttonsContainer);

  // Append form element to the main container
  mainContainer.appendChild(formElement);

  return mainContainer;
};
