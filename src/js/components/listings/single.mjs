import calculateRemainingTime from '../../functions/listings/timeRemaining.mjs';
import { createBidContainer } from './single-createContainer.mjs';
import { createListItem } from './single-createList.mjs';

export const singleListing = data => {
  console.log(data);

  const listing = {
    title: data.title,
    description: data.description,
    image: data.media[0] ? data.media[0] : '/src/images/placeholder.webp',
    id: data.id,
    highest: data.bids.map(bid => bid.amount).pop(),
    deadline: calculateRemainingTime(data.endsAt),
    bids: data._count.bids,
    owner: data.seller.name,
  };

  const { title, description, image, id, highest, deadline, bids, owner } =
    listing;

  const container = document.querySelector('#single-container');

  // Create container for the first column
  const col1Container = document.createElement('div');
  col1Container.classList.add('col-span-2');

  // Create image element for the first column
  const imageCol1 = document.createElement('img');
  imageCol1.src = image;
  imageCol1.alt = '';
  imageCol1.classList.add(
    'col-span-3',
    'rounded-md',
    'w-full',
    'h-full',
    'max-h-lg',
    'object-cover',
    'aspect-square',
  );

  // Append image to the container
  col1Container.appendChild(imageCol1);

  // Create container for the second column
  const col2Container = document.createElement('div');
  col2Container.classList.add(
    'flex',
    'flex-col',
    'gap-3',
    'row-span-2',
    'sticky',
    'top-0',
  );

  // Create heading for the second column
  const heading = document.createElement('h2');
  heading.classList.add(
    'text-4xl',
    'font-heading',
    'line-clamp-2',
    'leading-tight',
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

  // Create "Add Bid" button
  const addButton = document.createElement('button');
  addButton.classList.add(
    'bg-zinc-200',
    'w-full',
    'py-2.5',
    'text-zinc-900',
    'rounded-2xl',
  );
  addButton.textContent = 'Add bid';

  // Append elements to the second column container
  col2Container.appendChild(heading);
  col2Container.appendChild(highestBidContainer);
  col2Container.appendChild(bidsContainer);
  col2Container.appendChild(addButton);

  // Create container for the third column
  const col3Container = document.createElement('div');
  col3Container.classList.add('col-span-2', 'flex', 'flex-col', 'gap-4');

  // Create description heading
  const descriptionHeading = document.createElement('h4');
  descriptionHeading.classList.add('font-heading', 'font-bold');
  descriptionHeading.textContent = 'Description';

  // Create description paragraph
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = description
    ? description
    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eos enim fuga corrupti. Sit hic, voluptatibus accusantium sapiente autem possimus sequi eaque minus facere deserunt? Temporibus inventore nostrum officia vel.';

  // Create horizontal line
  const hr = document.createElement('hr');
  hr.classList.add('border-zinc-700');

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
