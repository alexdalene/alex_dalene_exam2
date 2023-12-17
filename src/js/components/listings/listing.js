import { select } from '../../tools/select.js';
import calculateRemainingTime from '../../functions/listings/timeRemaining.js';
import { checkMedia } from '../../functions/listings/checkImage.js';

gsap.registerPlugin(ScrollTrigger);

export function listing(data) {
  data.map(async listing => {
    const listingData = {
      name: listing.title ? listing.title : 'Lorem ipsum dolor sit amet',
      media: await checkMedia(listing.media),
      bids: listing.bids.map(bid => bid.amount).pop(),
      deadline: calculateRemainingTime(listing.endsAt),
      id: listing.id,
    };

    const { name, media, bids, deadline, id } = listingData;

    const img = new Image();
    img.src = media;
    img.alt = 'Image of an item being auctioned away';
    img.classList.add(
      'min-w-full',
      'min-h-full',
      'object-cover',
      'group-hover:scale-105',
      'transition-transform',
      'duration-300',
      'ease-in-out',
      '[height:-webkit-fill-available]',
    );

    // Create article element
    const article = document.createElement('article');
    article.addEventListener('click', () => {
      location.href = `/browse/listing/?id=${id}`;
    });
    article.classList.add(
      'flex',
      'flex-col',
      'rounded-xl',
      'relative',
      'cursor-pointer',
      'group',
      'overflow-hidden',
      'h-fit',
      'gap-2.5',
      'mb-2.5',
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: article,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 1,
      },
    });

    tl.from(article, {
      opacity: 0,
      duration: 0.3,
      y: 50,
      ease: 'power2.out',
    });

    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add(
      'relative',
      'aspect-[3/4]',
      'overflow-hidden',
      'rounded-xl',
    );

    // Create footer element
    const footer = document.createElement('footer');
    footer.classList.add(
      'flex',
      'gap-2.5',
      'items-center',
      'text-zinc-200',
      'justify-between',
      'px-2.5',
    );

    // Create title element
    const title = document.createElement('h2');
    title.classList.add('font-bold', 'line-clamp-1', 'w-full', 'basis-4/5');
    title.textContent = name;

    // Create price element
    const price = document.createElement('h3');
    price.classList.add('font-bold', 'w-full', 'text-end', 'basis-1/5');
    price.textContent = `$${bids ? bids : '0'}`;

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
      'z-10',
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
      '-bottom-5',
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
      'flex',
      'items-center',
    );

    // Create clock icon in the duration element
    const clockIcon = document.createElement('span');
    clockIcon.classList.add('material-symbols-outlined');
    clockIcon.textContent = 'schedule';

    // Create text content for the duration element
    const durationText = document.createTextNode(
      `${deadline.days}d ${deadline.hours}h ${deadline.minutes}m`,
    );

    // Append elements to the DOM
    duration.appendChild(clockIcon);
    duration.appendChild(durationText);
    durationContainer.append(duration, borderLeft, borderRight);

    // Append elements to the footer
    footer.append(title, price);
    article.appendChild(durationContainer);

    // Append elements to the article
    imageContainer.appendChild(img);
    article.appendChild(imageContainer);
    article.appendChild(footer);

    select('#listing-container').appendChild(article);
  });
}
