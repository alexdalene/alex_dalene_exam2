import { checkStorage } from '../../functions/listings/checkStorage.js';
import { remove } from '../../storage/remove.js';

export const noListings = () => {
  const listings = document.querySelector('#listing-container');

  // Create container element
  const container = document.createElement('div');
  container.classList.add(
    'aspect-square',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'text-zinc-200',
  );

  // Create heading element
  const heading = document.createElement('h4');
  heading.classList.add('font-heading', 'text-2xl');
  heading.textContent = 'No more listings';

  // Create paragraph element
  const paragraph = document.createElement('p');
  paragraph.classList.add('text-zinc-300');
  paragraph.textContent = 'Do you want to see more?';

  // Create button element
  const button = document.createElement('button');
  button.id = 'btn-get-new-listings';
  button.type = 'button';
  button.classList.add(
    'bg-zinc-200',
    'text-zinc-900',
    'py-2.5',
    'px-5',
    'rounded-2xl',
    'mt-5',
  );
  button.textContent = 'Get new listings';
  button.addEventListener('click', () => {
    remove('cachedPosts');
    checkStorage();
    scrollTo(0, 0);
  });

  // Append elements to the container
  container.appendChild(heading);
  container.appendChild(paragraph);
  container.appendChild(button);

  listings.appendChild(container);
};
