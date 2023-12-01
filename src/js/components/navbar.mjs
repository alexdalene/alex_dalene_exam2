import { select } from '../tools/select.mjs';
import { load } from '../storage/load.mjs';

export default function navbar() {
  // Create header element
  const header = document.createElement('header');
  header.classList.add(
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    'sticky',
    'top-0',
    'py-2.5',
  );

  // Create logo span
  const logoSpan = document.createElement('span');
  logoSpan.classList.add(
    'text-purple-300',
    'font-bold',
    'font-heading',
    'text-2xl',
  );
  logoSpan.textContent = 'Bid-B';

  // Create navigation element
  const nav = document.createElement('nav');
  nav.classList.add('hidden', 'lg:flex', 'gap-5', 'text-zinc-400');

  // Helper function to create navigation link elements
  function createNavLink(href, text) {
    const link = document.createElement('a');
    link.href = href;
    link.classList.add(
      'rounded-md',
      'px-2',
      'py-0.5',
      'flex',
      'items-center',
      'gap-1',
      'group',
      'relative',
    );

    // Create elements for the navigation link
    const circle = document.createElement('div');
    circle.classList.add('nav-btn-circle');

    const textElement = document.createElement('div');
    textElement.classList.add('z-10');
    textElement.textContent = text;

    const bg = document.createElement('div');
    bg.classList.add('nav-btn-bg');

    // Append elements to the link
    link.appendChild(circle);
    link.appendChild(textElement);
    link.appendChild(bg);

    return link;
  }

  // Create navigation links
  const browseLink = createNavLink('', 'Browse');
  const loginLink = createNavLink('', 'Log In');
  const signupLink = createNavLink('', 'Create an account');

  // Append navigation links to the navigation element
  nav.appendChild(browseLink);
  nav.appendChild(loginLink);
  nav.appendChild(signupLink);

  // Create button element
  const button = document.createElement('button');
  button.id = 'menu-container';
  button.classList.add(
    'flex',
    'items-center',
    'gap-1',
    'bg-zinc-700',
    'text-zinc-200',
    'font-bold',
    'px-3',
    'py-1',
    'rounded-full',
    'lg:hidden',
    'relative',
  );

  // Create elements for the button
  const circleBtn = document.createElement('div');
  circleBtn.classList.add('nav-btn-circle', 'scale-100');

  const spanBtnOpen = document.createElement('span');
  spanBtnOpen.id = 'btn-open';
  spanBtnOpen.textContent = 'Menu';

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
    'pt-1',
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

  // Helper function to create menu link elements
  function createMenuLink(href, text) {
    const link = createNavLink(href, text);
    link.querySelector('.nav-btn-circle').classList.add('bg-zinc-900');
    link.querySelector('.nav-btn-bg').classList.add('from-purple-100');
    return link;
  }

  // Create menu links
  const browseMenuLink = createMenuLink('./browse/', 'Browse');
  const loginMenuLink = createMenuLink('./auth#login', 'Log In');
  const signupMenuLink = createMenuLink('./auth#signup', 'Sign Up');

  // Append menu links to the menuLinks element
  menuLinks.appendChild(browseMenuLink);
  menuLinks.appendChild(loginMenuLink);
  menuLinks.appendChild(signupMenuLink);

  // Append elements to the dropdown menu
  dropdownMenu.appendChild(spanBtnClose);
  dropdownMenu.appendChild(menuLinks);

  // Append elements to the button
  button.appendChild(circleBtn);
  button.appendChild(spanBtnOpen);
  button.appendChild(dropdownMenu);

  // Append elements to the header
  header.appendChild(logoSpan);
  header.appendChild(nav);
  header.appendChild(button);

  select('main').prepend(header);
}
