import { header } from './setup/header.mjs';
import { logo } from './setup/logo.mjs';
import { nav } from './setup/navigation.mjs';
import { button } from './setup/menu.mjs';
import { dropdownMenu } from './setup/dropdown.mjs';
import { select } from '../../tools/select.mjs';
import { navbarAnimations } from '../../animations/navbar.mjs';

export const navbar = async () => {
  // Append elements to the menu
  button.appendChild(dropdownMenu);

  // Append elements to the header
  header.append(logo, nav, button);

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

  try {
    select('main').prepend(header);
    navbarAnimations();
  } catch {
    throw new Error(
      'Something went wrong while appending the navbar to the DOM.',
    );
  }
};
