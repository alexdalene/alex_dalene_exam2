import { imgArray } from './images-imgArray.mjs';

export const appendImage = (url, gallery) => {
  const container = document.createElement('div');
  container.classList.add(
    'relative',
    'gallery-item',
    'overflow-hidden',
    'aspect-square',
    'rounded-md',
    'group',
  );

  const overlay = document.createElement('div');
  overlay.classList.add(
    'absolute',
    'inset-0',
    'w-full',
    'h-full',
    'bg-zinc-900',
    'bg-opacity-50',
    'rounded-md',
    'opacity-0',
    'group-hover:opacity-100',
    'transition-opacity',
    'grid',
    'place-content-center',
  );

  const overlayIcon = document.createElement('span');
  overlayIcon.classList.add(
    'material-symbols-outlined',
    'bg-purple-300',
    'p-2',
    'rounded-lg',
    'text-zinc-900',
    'cursor-pointer',
  );
  overlayIcon.textContent = 'delete';

  const updateImageNumbers = updatedImgArray => {
    updatedImgArray.forEach(({ url, id }, index) => {
      const image = gallery.querySelector(`#${id}`);
      const number = image.parentNode.querySelector('span');
      number.textContent = index + 1;
    });
  };

  overlayIcon.addEventListener('click', () => {
    const index = imgArray.findIndex(
      img => img.id === container.querySelector('img').id,
    );
    imgArray.splice(index, 1);
    container.remove();
    updateImageNumbers(imgArray);
  });

  const number = document.createElement('span');
  number.classList.add(
    'absolute',
    'top-2',
    'left-2',
    'bg-zinc-900',
    'w-8',
    'h-8',
    'rounded-full',
    'text-sm',
    'flex',
    'items-center',
    'justify-center',
    'image-number',
  );
  number.textContent = imgArray.length + 1;

  const img = document.createElement('img');
  img.classList.add(
    'min-w-full',
    'min-h-full',
    'object-cover',
    'aspect-square',
  );
  img.src = url;
  img.id = `img-${Date.now()}`;
  imgArray.push({ url, id: img.id });

  overlay.appendChild(overlayIcon);
  container.appendChild(number);
  container.appendChild(img);
  container.appendChild(overlay);
  gallery.appendChild(container);
};
