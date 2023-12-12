import { imgArray } from './images-imgArray.mjs';

export const appendImage = (url, gallery) => {
  const container = document.createElement('div');
  container.classList.add('relative', 'gallery-item', 'overflow-hidden');

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
  number.textContent = imgArray.length;

  const img = document.createElement('img');
  img.classList.add('min-w-full', 'min-h-full', 'object-cover');
  img.src = url;

  container.appendChild(number);
  container.appendChild(img);
  gallery.appendChild(container);
};
