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
      'rounded-xl',
      'aspect-square',
      'transition-all',
      'hover:bg-surface',
      'relative',
      'cursor-pointer',
      'bg-zinc-800',
      'group',
      'overflow-hidden',
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
      'object-cover',
    );

    // Create footer element
    const footer = document.createElement('footer');
    footer.classList.add(
      'flex',
      'gap-2.5',
      'items-center',
      'absolute',
      'bottom-0',
      'bg-zinc-900',
      'rounded-tr-2xl',
      'pt-3',
      'pr-3',
      'min-w-[60%]',
      'max-w-[60%]',
      'justify-between',
      'group-hover:translate-y-20',
      'transition-transform',
      'delay-200',
    );

    // Create title element
    const title = document.createElement('h2');
    title.classList.add(
      'font-bold',
      'line-clamp-1',
      'bg-zinc-800',
      'px-2.5',
      'py-1',
      'rounded-lg',
      'w-full',
      'basis-3/4',
    );
    title.textContent = name;

    // Create price element
    const price = document.createElement('h3');
    price.classList.add(
      'text-purple-300',
      'font-bold',
      'bg-zinc-800',
      'px-2.5',
      'py-1',
      'rounded-lg',
      'w-full',
      'text-center',
      'basis-1/4',
    );
    price.textContent = `$${bids ? bids : '0'}`;

    const borderLeftFooter = document.createElement('div');
    borderLeftFooter.classList.add(
      'absolute',
      '-top-5',
      'left-0',
      'h-5',
      'w-5',
      'text-zinc-900',
      '-rotate-90',
    );
    borderLeftFooter.innerHTML = `
    <svg viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.000212396 0H13.0002C2.87774 0 0.163678 7.61338 0.000212396 12.1365V13C-0.0102433 12.7282 -0.0107289 12.4392 0.000212396 12.1365V0Z"/>
    </svg>
    `;

    const borderRightFooter = document.createElement('div');
    borderRightFooter.classList.add(
      'absolute',
      'bottom-0',
      '-right-5',
      'h-5',
      'w-5',
      'text-zinc-900',
      '-rotate-90',
    );
    borderRightFooter.innerHTML = `
    <svg viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.000212396 0H13.0002C2.87774 0 0.163678 7.61338 0.000212396 12.1365V13C-0.0102433 12.7282 -0.0107289 12.4392 0.000212396 12.1365V0Z"/>
    </svg>
    `;

    // Create duration element
    const durationContainer = document.createElement('div');
    durationContainer.classList.add(
      'flex',
      'items-center',
      'justify-center',
      'gap-[5px]',
      'bg-zinc-900',
      'rounded-bl-2xl',
      'rounded-tr-xl',
      'w-fit',
      'pb-3',
      'pl-3',
      'text-zinc-200',
      'absolute',
      'top-0',
      'right-0',
      'group-hover:-translate-y-20',
      'transition-transform',
      'delay-200',
    );

    const borderLeft = document.createElement('div');
    borderLeft.classList.add(
      'absolute',
      'top-0',
      '-left-5',
      'h-5',
      'w-5',
      'text-zinc-900',
      'rotate-90',
    );
    borderLeft.innerHTML = `
    <svg viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.000212396 0H13.0002C2.87774 0 0.163678 7.61338 0.000212396 12.1365V13C-0.0102433 12.7282 -0.0107289 12.4392 0.000212396 12.1365V0Z"/>
    </svg>
    `;

    const borderRight = document.createElement('div');
    borderRight.classList.add(
      'absolute',
      'top-10',
      'right-0',
      'h-5',
      'w-5',
      'text-zinc-900',
      'rotate-90',
    );
    borderRight.innerHTML = `
    <svg viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.000212396 0H13.0002C2.87774 0 0.163678 7.61338 0.000212396 12.1365V13C-0.0102433 12.7282 -0.0107289 12.4392 0.000212396 12.1365V0Z"/>
    </svg>
    `;

    const duration = document.createElement('span');
    duration.classList.add(
      'flex',
      'gap-1',
      'rounded-lg',
      'bg-zinc-800',
      'p-1',
      'text-sm',
      'text-zinc-500',
      'flex',
      'items-center',
    );

    // Create clock icon in the duration element
    const clockIcon = document.createElement('span');
    clockIcon.classList.add('material-symbols-outlined');
    clockIcon.textContent = 'schedule';

    // Create text content for the duration element
    const durationText = document.createTextNode(
      `${deadline.hours}h ${deadline.minutes}m`,
    );

    // Append elements to the DOM
    duration.appendChild(clockIcon);
    duration.appendChild(durationText);
    durationContainer.append(duration, borderLeft, borderRight);

    // Append elements to the footer
    footer.append(title, price, borderLeftFooter, borderRightFooter);
    article.appendChild(durationContainer);

    // Append elements to the article
    article.appendChild(image);
    article.appendChild(footer);

    select('#listing-container').appendChild(article);
  });
}
