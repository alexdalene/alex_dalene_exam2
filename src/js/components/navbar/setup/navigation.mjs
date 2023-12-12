import { createNavLink } from '../functions/createNavLink.mjs';
import { load } from '../../../storage/load.mjs';

// Create navigation element
const nav = document.createElement('nav');
nav.classList.add('hidden', 'lg:flex', 'gap-5', 'text-zinc-400');

// Create navigation links
const browseLink = createNavLink('/browse', 'Browse');
let loginLink = createNavLink('/auth#login', 'Log In');
let signupLink = createNavLink('/auth#signup', 'Create an account');

// Create navigation links for logged in users
if (load('token')) {
  const profileLink = createNavLink('/profile', 'Profile');
  const createLink = createNavLink('/create', 'Create');

  nav.append(browseLink, createLink, profileLink);
} else {
  nav.append(browseLink, loginLink, signupLink);
}

export { nav };
