import { createNavLink } from '../functions/createNavLink.mjs';
import { remove, load } from '../../../storage/index.mjs';

// Create navigation element
const nav = document.createElement('nav');
nav.classList.add('hidden', 'lg:flex', 'gap-5', 'text-zinc-400');

// Create navigation links
const browseLink = createNavLink('/browse', 'Browse');
let loginLink = createNavLink('/auth#login', 'Log In');
let signupLink = createNavLink('/auth#signup', 'Create an account');

// Create navigation links for logged in users
if (load('token')) {
  loginLink = createNavLink('#', 'Log Out');
  loginLink.id = 'btn-logout';
  signupLink = createNavLink('/profile', 'Profile');

  loginLink.addEventListener('click', () => {
    remove('token');
    remove('username');
    remove('credits');
    window.location.href = '/';
  });
}

// Append navigation links to the navigation element
nav.append(browseLink, loginLink, signupLink);

export { nav };
