import { navbar } from '../components/navbar/navbar.mjs';
import { loader } from '../components/loader/loader.mjs';
import { createListener } from '../listeners/create/create.mjs';

const render = async () => {
  try {
    loader.showLoader();
    await navbar();
    loader.hideLoader();

    const mediaBtn = document.querySelector('#btn-add-media');
    const mediaInput = document.querySelector('#listing-media');
    const gallery = document.querySelector('#listing-gallery');
    const message = document.querySelector('#media-message');
    const submitBtn = document.querySelector('#btn-publish');

    const imgArray = [];

    mediaBtn.addEventListener('click', () => {
      const value = mediaInput.value;
      if (!value) return;
      mediaInput.value = '';

      if (imgArray.length >= 8) {
        message.textContent = 'You can only upload 8 images';
        message.classList.remove('text-zinc-400');
        message.classList.add('text-red-400');
        return;
      }

      imgArray.push(value);
      appendImage(value);
    });

    const appendImage = url => {
      const container = document.createElement('div');
      container.classList.add('relative', 'gallery-item');

      const number = document.createElement('span');
      number.classList.add(
        'absolute',
        '-top-2',
        '-right-2',
        'bg-zinc-900',
        'w-8',
        'h-8',
        'rounded-full',
        'text-sm',
        'flex',
        'items-center',
        'justify-center',
      );
      number.textContent = imgArray.length; // Add the number to the image

      const img = document.createElement('img');
      img.src = url;

      container.appendChild(number);
      container.appendChild(img);
      gallery.appendChild(container);
    };

    submitBtn.addEventListener('click', async event => {
      await createListener(event, imgArray);
    });
  } catch (error) {
    console.log(error);
  }
};

render();
