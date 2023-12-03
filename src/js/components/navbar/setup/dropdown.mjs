import { createNavLink } from '../functions/createNavLink.mjs';
import { createMenuLink } from '../functions/createMenuLink.mjs';
import { remove, load } from '../../../storage/index.mjs';

const dropdownMenu = document.createElement('div');
dropdownMenu.id = 'dropdown-menu';
dropdownMenu.classList.add(
  'bg-purple-300',
  'rounded-2xl',
  'absolute',
  'top-0',
  '-right-20',
  'z-10',
  'flex',
  'flex-col',
  'justify-between',
  'px-2.5',
  'pt-0.5',
  'pb-2.5',
  'text-zinc-900',
  'w-0',
  'h-0',
  'opacity-0',
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

// Create menu links
const browseMenuLink = createMenuLink('/browse/', 'Browse');
let loginMenuLink = createMenuLink('/auth#login', 'Log In');
let signupMenuLink = createMenuLink('/auth#signup', 'Sign Up');

if (load('token')) {
  loginMenuLink = createNavLink('#', 'Log Out');
  signupMenuLink = createNavLink('/profile', 'Profile');
  spanBtnOpen.textContent = `Hi, ${load('username')}`;

  loginMenuLink.addEventListener('click', () => {
    remove('token');
    remove('username');
    remove('credits');
    window.location.href = '/';
  });
}

// Append elements to the dropdown menu
dropdownMenu.appendChild(spanBtnClose);
dropdownMenu.appendChild(menuLinks);

// Append menu links to the menuLinks element
menuLinks.appendChild(browseMenuLink);
menuLinks.appendChild(loginMenuLink);
menuLinks.appendChild(signupMenuLink);

export { dropdownMenu };
