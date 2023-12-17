import { createMenuLink } from '../functions/createMenuLink.js';
import { load } from '../../../storage/load.js';

const dropdownMenu = document.createElement('div');
dropdownMenu.id = 'dropdown-menu';
dropdownMenu.classList.add(
  'bg-purple-300',
  'rounded-2xl',
  'absolute',
  'top-0',
  'right-0',
  'z-10',
  'flex-col',
  'justify-between',
  'px-2.5',
  'pt-0.5',
  'pb-2.5',
  'text-zinc-900',
  'w-0',
  'h-0',
  'opacity-0',
  'hidden',
);

// Create elements for the dropdown menu
const spanBtnClose = document.createElement('span');
spanBtnClose.id = 'btn-close';
spanBtnClose.classList.add('text-end');
spanBtnClose.textContent = 'Close';

const menuLinks = document.createElement('div');
menuLinks.classList.add(
  'flex',
  'items-start',
  'flex-col',
  'text-lg',
  'gap-1',
  'font-normal',
);

const browseMenuLink = createMenuLink('/browse/', 'Browse');
menuLinks.appendChild(browseMenuLink);

if (load('token')) {
  const createListingsMenuLink = createMenuLink('/create', 'Create');
  const profileMenuLink = createMenuLink('/profile', 'Profile');

  // Append elements to the dropdown menu
  menuLinks.appendChild(createListingsMenuLink);
  menuLinks.appendChild(profileMenuLink);
} else {
  const loginMenuLink = createMenuLink('/auth#login', 'Log In');
  const signupMenuLink = createMenuLink('/auth#signup', 'Sign Up');

  menuLinks.appendChild(loginMenuLink);
  menuLinks.appendChild(signupMenuLink);
}

// Append elements to the dropdown menu
dropdownMenu.appendChild(spanBtnClose);
dropdownMenu.appendChild(menuLinks);

// Append menu links to the menuLinks element

export { dropdownMenu };
