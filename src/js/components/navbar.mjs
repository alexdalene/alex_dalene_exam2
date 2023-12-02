import { select } from '../tools/select.mjs';
import { load, remove } from '../storage/index.mjs';

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
    'z-50',
  );

  // Create logo span
  const logoSpan = document.createElement('a');
  logoSpan.href = '/';
  logoSpan.classList.add('w-6', 'fill-purple-300');

  logoSpan.innerHTML = `
  <svg
            id="logo"
            data-name="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 215.02 309.07"
          >
            <g id="logo-group" data-name="logo-group">
              <g>
                <g>
                  <path
                    d="m215,221h-49c.52-12.08-4.34-24.58-13.75-32.5-18.35-15.44-42.78-7.39-64.75-9.75l.25-49.25c23.43-2.31,53.29,7.67,70.25-13.25,19.08-23.54,5.78-57.57-22.5-65V1.75c75.4,10.95,106.02,97.7,52.5,153.5,17.32,16.76,27.59,41.65,27,65.75Z"
                  />
                  <path d="m.75,0h122l-.25,50.75-121.75.25V0Z" />
                  <g>
                    <path d="m.25,63l52.75.25-.75,181.75-52.25-.75L.25,63Z" />
                    <path d="m.75,257.5h105.5l.25,50.75-105.75.75v-51.5Z" />
                  </g>
                  <path
                    d="m215,221c-1.23,50.84-44.35,89.99-94.75,88-.26-.11-1.18-1.51-1.25-1.75-.71-2.32.17-41.81.5-48.5,2.1-2.62,17.16,3.51,32.25-8.25,9.1-7.09,13.76-18.15,14.25-29.5h49Z"
                  />
                </g>
                <path
                  d="m66.25,63c14.9.9,54.14-1.4,64.5.5,28.33,5.2,29.93,45.4,4.5,53-10.39,3.1-60.01-1.06-61.25,1.75v73c13.7,1.35,46.93-.95,55.75.25,16.39,2.24,30.87,24.58,18.75,42.75-2.93,4.39-11.07,10.46-16.25,11.25-7.12,1.08-52.95-.62-66.75-.25l.75-182.25Z"
                />
              </g>
            </g></svg
  `;

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
  const browseLink = createNavLink('/browse', 'Browse');
  let loginLink = createNavLink('/auth#login', 'Log In');
  let signupLink = createNavLink('/auth#signup', 'Create an account');

  // Create navigation links for logged in users
  if (load('token')) {
    loginLink = createNavLink('#', 'Log Out');
    signupLink = createNavLink('/profile', 'Profile');

    loginLink.addEventListener('click', () => {
      remove('token');
      remove('username');
      remove('credits');
      window.location.href = '/';
    });
  }

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
    'py-0.5',
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

  // Helper function to create menu link elements
  function createMenuLink(href, text) {
    const link = createNavLink(href, text);
    link.querySelector('.nav-btn-circle').classList.add('bg-zinc-900');
    link.querySelector('.nav-btn-bg').classList.add('from-purple-100');
    return link;
  }

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

  // Add event listener to the navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight + 50) {
      nav.classList.remove('lg:flex');
      button.classList.remove('lg:hidden');
    } else {
      nav.classList.add('lg:flex');
      button.classList.add('lg:hidden');
    }
  });

  select('main').prepend(header);
}
