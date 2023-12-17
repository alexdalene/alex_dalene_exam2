import { header } from './setup/header.js';
import { logo } from './setup/logo.js';
import { nav } from './setup/navigation.js';
import { button } from './setup/menu.js';
import { dropdownMenu } from './setup/dropdown.js';
import { select } from '../../tools/select.js';
import { navbarAnimations } from '../../animations/navbar.js';
import { animateHeader } from '../../animations/header.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes and appends the navbar to the DOM.
 * @throws {Error} If something goes wrong while appending the navbar to the DOM.
 */
export const navbar = async () => {
  try {
    // // Append elements to the menu
    button.appendChild(dropdownMenu);

    // Append elements to the header
    header.append(logo, nav, button);

    animateHeader();

    select('body').prepend(header);
    navbarAnimations();
  } catch {
    throw new Error(
      'Something went wrong while appending the navbar to the DOM.',
    );
  }
};
