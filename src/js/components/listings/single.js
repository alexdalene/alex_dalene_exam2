import { bidOnListing } from '../../api/bid/bid.js';
import calculateRemainingTime from '../../functions/listings/timeRemaining.js';
import { load } from '../../storage/load.js';
import { displaySingleListing } from '../../views/listings/single.js';
import { showCredits } from '../navbar/functions/credits.js';
import { createBidContainer } from './single-createContainer.js';
import { createListItem } from './single-createList.js';
import { updateTime } from './single-timeInteral.js';

export const singleListing = data => {
  const listing = {
    title: data.title ? data.title : 'Lorem ipsum dolor sit amet',
    description: data.description,
    image: data.media[0] ? data.media[0] : '/src/images/placeholder.webp',
    imageArray: data.media,
    id: data.id,
    highest: data.bids.map(bid => bid.amount).pop(),
    deadline: calculateRemainingTime(data.endsAt),
    bids: data._count.bids,
    bidsArray: data.bids,
    owner: data.seller.name,
  };

  const {
    title,
    description,
    image,
    imageArray,
    id,
    highest,
    deadline,
    bids,
    bidsArray,
    owner,
  } = listing;

  const container = document.querySelector('#single-container');
  container.innerHTML = '';

  // Create container for the first column
  const col1Container = document.createElement('div');
  col1Container.classList.add(
    'col-span-2',
    'relative',
    'flex',
    'items-center',
    'justify-center',
  );

  const nextButton = document.createElement('button');
  nextButton.classList.add(
    'absolute',
    'right-5',
    'z-10',
    'bg-purple-300',
    'bg-opacity-60',
    'hover:bg-opacity-100',
    'transition',
    'text-zinc-900',
    'p-2',
    'grid',
    'place-content-center',
    'rounded-full',
  );
  nextButton.addEventListener('click', () => {
    const index = imageArray.indexOf(imageCol1.src);
    const nextIndex = index + 1;
    const nextImage = imageArray[nextIndex];

    if (nextIndex === imageArray.length) {
      imageCol1.src = imageArray[0];
      updateIndexOfImage(0);
      return;
    }

    imageCol1.src = nextImage;
    updateIndexOfImage(nextIndex);
  });

  const nextIcon = document.createElement('span');
  nextIcon.classList.add('material-symbols-outlined');
  nextIcon.textContent = 'arrow_forward_ios';

  const prevButton = document.createElement('button');
  prevButton.classList.add(
    'absolute',
    'left-5',
    'z-10',
    'bg-purple-300',
    'bg-opacity-60',
    'hover:bg-opacity-100',
    'transition',
    'text-zinc-900',
    'p-2',
    'grid',
    'place-content-center',
    'rounded-full',
  );
  prevButton.addEventListener('click', () => {
    const index = imageArray.indexOf(imageCol1.src);
    const prevIndex = index - 1;
    const prevImage = imageArray[prevIndex];

    if (prevIndex === -1) {
      imageCol1.src = imageArray[imageArray.length - 1];
      updateIndexOfImage(imageArray.length - 1);
      return;
    }

    imageCol1.src = prevImage;
    updateIndexOfImage(prevIndex);
  });

  const prevIcon = document.createElement('span');
  prevIcon.classList.add('material-symbols-outlined', 'rotate-180');
  prevIcon.textContent = 'arrow_forward_ios';

  nextButton.appendChild(nextIcon);
  prevButton.appendChild(prevIcon);

  // Create image element for the first column
  const imageCol1 = new Image();
  imageCol1.src = image;
  imageCol1.alt = 'Image of an item being auctioned away';
  imageCol1.classList.add(
    'col-span-3',
    'rounded-md',
    'w-full',
    'h-full',
    'max-h-lg',
    'object-cover',
    'aspect-square',
  );

  const indexOfImage = document.createElement('span');
  indexOfImage.classList.add(
    'absolute',
    'bottom-5',
    'font-bold',
    'bg-zinc-900',
    'bg-opacity-60',
    'px-2.5',
    'py-0.5',
    'rounded-full',
    'min-w-[3rem]',
    'text-center',
  );
  indexOfImage.textContent = `${imageArray.indexOf(image) + 1}/${
    imageArray.length
  }`;

  const updateIndexOfImage = index => {
    indexOfImage.textContent = `${index + 1}/${imageArray.length}`;
  };

  // Append image to the container
  if (imageArray.length > 1) {
    col1Container.append(nextButton, prevButton, indexOfImage);
  }

  col1Container.appendChild(imageCol1);

  // Create container for the second column
  const col2Container = document.createElement('div');
  col2Container.classList.add(
    'gap-2.5',
    'lg:sticky',
    'lg:top-5',
    'grid',
    'grid-cols-2',
    'col-span-2',
    'lg:col-span-1',
    'lg:content-start',
  );

  // Create heading for the second column
  const heading = document.createElement('h2');
  heading.classList.add(
    'text-4xl',
    'font-heading',
    'line-clamp-2',
    'leading-tight',
    'col-span-2',
  );
  heading.textContent = title;

  // Create container for the highest bid
  const highestBidContainer = createBidContainer(
    highest ? `$${highest}` : '$0',
    'payments',
    'Highest bid',
  );

  // Create container for the number of bids
  const bidsContainer = createBidContainer(
    bids ? bids : 'No bids yet',
    'checkbook',
    'Bids',
  );
  bidsContainer.classList.add('cursor-pointer', 'relative', 'group');
  bidsContainer.addEventListener('click', () => {
    bidsList.classList.toggle('hidden');
    bidsContainerIcon.textContent = bidsList.classList.contains('hidden')
      ? 'visibility_off'
      : 'visibility';
  });

  const bidsContainerIcon = document.createElement('span');
  bidsContainerIcon.classList.add(
    'material-symbols-outlined',
    'absolute',
    'right-2',
    'top-2',
    'text-zinc-600',
    'group-hover:text-zinc-200',
    'transition',
  );
  bidsContainerIcon.textContent = 'visibility_off';

  const bidsList = document.createElement('ul');
  bidsList.classList.add(
    'flex',
    'flex-col',
    'gap-0.5',
    'bg-gradient-to-tl',
    'from-zinc-800',
    'rounded-xl',
    'p-4',
    'col-span-2',
    'border',
    'border-zinc-800',
    'text-sm',
    'hidden',
    'max-h-60',
    'overflow-y-scroll',
  );

  for (let bid of bidsArray) {
    const listItem = createListItem(bid.bidderName, `$${bid.amount}`);
    listItem.classList.add('border-b', 'border-zinc-700', 'mb-1', 'pb-1');
    bidsList.appendChild(listItem);
  }

  const deadlineContainer = document.createElement('div');
  deadlineContainer.textContent = 'Loading...';
  deadlineContainer.classList.add(
    'border',
    'border-zinc-800',
    'bg-gradient-to-tl',
    'from-zinc-800',
    'rounded-xl',
    'h-20',
    'p-4',
    'flex',
    'justify-center',
    'items-center',
    'justify-around',
    'col-span-2',
  );

  updateTime(deadline, deadlineContainer);

  // Create container for bidding
  const buttonContainer = document.createElement('form');
  buttonContainer.classList.add(
    'flex',
    'gap-2',
    'relative',
    'col-span-2',
    'mt-2',
    'peer',
    'hidden',
  );

  if (load('token') && load('username') !== owner) {
    buttonContainer.classList.remove('hidden');
  }

  const label = document.createElement('label');
  label.classList.add(
    'w-full',
    'relative',
    'before:absolute',
    'before:left-3.5',
    'before:content-["$"]',
    'flex',
    'items-center',
    'transition',
    'duration-300',
  );

  const Input = document.createElement('input');
  Input.type = 'number';
  Input.required = true;
  Input.placeholder = `${highest ? highest + 1 : 1}`;
  Input.min = highest ? highest + 1 : 1;
  Input.name = 'amount';
  Input.classList.add(
    'rounded-md',
    'border',
    'border-zinc-800',
    'bg-zinc-800',
    'px-2.5',
    'py-2.5',
    'transition',
    'duration-300',
    'focus:border-purple-300',
    'focus:outline-none',
    'peer',
    'w-full',
    'pl-7',
    'placeholder-zinc-600',
    '[appearance:textfield]',
    '[&::-webkit-outer-spin-button]:appearance-none',
    '[&::-webkit-inner-spin-button]:appearance-none',
  );
  Input.addEventListener('keyup', e => {
    label.classList.remove('text-red-500');
    // Check if the input value is not a number
    if (e.target.value === '') {
      // Clear the input field
      e.target.value = '';
    }
  });

  // Create "Add Bid" button
  const addButton = document.createElement('button');
  addButton.classList.add(
    'bg-gradient-to-r',
    'from-zinc-700',
    'w-1/4',
    'py-2.5',
    'border',
    'border-zinc-700',
    'peer-focus:border-purple-300',
    'transition',
    'duration-300',
    'border-l-0',
    'rounded-r-md',
    'rounded-l-none',
    'flex',
    'items-center',
    'justify-center',
    'absolute',
    'right-0',
    'group',
  );
  addButton.addEventListener('click', async e => {
    try {
      e.preventDefault();
      const amount = Input.value;

      if (amount <= highest || amount === '' || amount === '0') {
        label.classList.add('text-red-500');
        return;
      }

      addIcon.textContent = 'progress_activity';
      addIcon.classList.add('animate-spin');
      await bidOnListing(parseInt(amount));
      await showCredits();
      await displaySingleListing();
    } catch (error) {
      throw new Error(error.message);
    }
  });

  const addIcon = document.createElement('span');
  addIcon.classList.add(
    'material-symbols-outlined',
    'text-purple-300',
    'transition-translate',
    'duration-200',
    'ease-in-out',
  );
  addIcon.textContent = 'gavel';

  // Append elements to the second column container
  addButton.appendChild(addIcon);
  label.append(Input, addButton);
  buttonContainer.appendChild(label);
  col2Container.appendChild(heading);
  col2Container.appendChild(deadlineContainer);
  col2Container.appendChild(highestBidContainer);
  col2Container.appendChild(bidsContainer);
  if (bidsArray.length !== 0) {
    bidsContainer.appendChild(bidsContainerIcon);
    col2Container.appendChild(bidsList);
  }
  col2Container.appendChild(buttonContainer);

  // Create container for the third column
  const col3Container = document.createElement('div');
  col3Container.classList.add(
    'col-span-2',
    'flex',
    'flex-col',
    'gap-4',
    'bg-zinc-800',
    'p-4',
    'rounded-xl',
    'lg:bg-transparent',
    'lg:p-0',
  );

  // Create description heading
  const descriptionHeading = document.createElement('h4');
  descriptionHeading.classList.add('font-heading', 'font-bold', 'text-xl');
  descriptionHeading.textContent = 'Description';

  // Create description paragraph
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.classList.add('break-words');
  descriptionParagraph.textContent = description
    ? description
    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eos enim fuga corrupti. Sit hic, voluptatibus accusantium sapiente autem possimus sequi eaque minus facere deserunt? Temporibus inventore nostrum officia vel.';

  // Create horizontal line
  const hr = document.createElement('hr');
  hr.classList.add('border-zinc-700', 'mt-4');

  // Create list container
  const listContainer = document.createElement('ul');
  listContainer.classList.add('flex', 'flex-col', 'gap-0.5');

  // Create list items
  const listItem1 = createListItem('ID', id);
  const listItem2 = createListItem('Owner', owner);

  // Append list items to the list container
  listContainer.appendChild(listItem1);
  listContainer.appendChild(listItem2);

  // Append elements to the third column container
  col3Container.appendChild(descriptionHeading);
  col3Container.appendChild(descriptionParagraph);
  col3Container.appendChild(hr);
  col3Container.appendChild(listContainer);

  container.append(col1Container, col2Container, col3Container);
};
