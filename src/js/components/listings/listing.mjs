import { select } from '../../tools/select.mjs';
import calculateRemainingTime from '../../functions/listings/timeRemaining.mjs';

export function listing(data) {
  data.map(listing => {
    const listingData = {
      name: listing.title,
      media: listing.media[0],
      bids: listing.bids.map(bid => bid.amount).pop(),
      deadline: calculateRemainingTime(listing.endsAt),
    };

    const { name, media, bids, deadline } = listingData;

    // Create article element
    const article = document.createElement('article');
    article.classList.add(
      'flex',
      'flex-col',
      'p-2.5',
      'rounded-xl',
      'aspect-square',
      'transition-all',
      'hover:bg-surface',
      'relative',
      'cursor-pointer',
    );

    // Create image element
    const image = document.createElement('img');
    image.src = media ? media : '../src/images/hero-gradient-2.png';
    image.alt = 'Image of an item being auctioned away';
    image.loading = 'lazy';
    image.classList.add(
      'min-w-full',
      'min-h-full',
      'aspect-square',
      'rounded-xl',
      'mb-2.5',
      'object-cover',
    );

    // Create title element
    const title = document.createElement('h2');
    title.classList.add('font-bold');
    title.textContent = name;

    // Create footer element
    const footer = document.createElement('footer');
    footer.classList.add('flex', 'gap-2.5', 'items-center');

    // Create price element
    const price = document.createElement('h3');
    price.classList.add('font-bold', 'text-2xl', 'font-heading');
    price.textContent = `$${bids ? bids : '0'}`;

    // Create duration element
    const durationContainer = document.createElement('div');
    durationContainer.classList.add(
      'flex',
      'items-center',
      'justify-center',
      'gap-[5px]',
      'bg-background',
      'rounded-bl-xl',
      'rounded-tr-xl',
      'w-fit',
      'pb-3',
      'pl-3',
      'text-onSurfaceVariant',
      'absolute',
      'top-2.5',
      'right-2.5',
    );

    const borderLeft = document.createElement('img');
    borderLeft.src = '../src/svg/inverted-border.svg';
    borderLeft.alt = '';
    borderLeft.classList.add('absolute', 'top-0', '-left-[1.1rem]', 'h-5');

    const borderRight = document.createElement('img');
    borderRight.src = '../src/svg/inverted-border.svg';
    borderRight.alt = '';
    borderRight.classList.add('absolute', 'top-10', 'right-0', 'h-5');

    const duration = document.createElement('span');
    duration.classList.add(
      'flex',
      'gap-[5px]',
      'rounded-full',
      'bg-surfaceVariant',
      'p-1',
      'text-sm',
    );

    // Create clock icon in the duration element
    const clockIcon = document.createElement('img');
    clockIcon.src = '../src/svg/icon/pace.svg';
    clockIcon.alt = '';

    // Create text content for the duration element
    const durationText = document.createTextNode(
      `${deadline.hours}h ${deadline.minutes}m`,
    );

    // Append elements to the DOM
    duration.appendChild(clockIcon);
    duration.appendChild(durationText);
    durationContainer.append(duration, borderLeft, borderRight);

    // Append elements to the footer
    footer.appendChild(price);
    article.appendChild(durationContainer);

    // Append elements to the article
    article.appendChild(image);
    article.appendChild(title);
    article.appendChild(footer);

    select('#listing-container').appendChild(article);
  });
}
