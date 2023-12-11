import { header } from './setup/header.mjs';
import { logo } from './setup/logo.mjs';
import { nav } from './setup/navigation.mjs';
import { button } from './setup/menu.mjs';
import { dropdownMenu } from './setup/dropdown.mjs';
import { select } from '../../tools/select.mjs';
import { navbarAnimations } from '../../animations/navbar.mjs';
import { animateHeader } from '../../animations/header.mjs';

gsap.registerPlugin(ScrollTrigger);

export const navbar = async () => {
  try {
    // Append elements to the menu
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
