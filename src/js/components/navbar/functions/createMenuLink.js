import { createNavLink } from './createNavLink.js';

/**
 * Creates a menu link
 * @param {string} href - The link's href attribute
 * @param {string} text - The link's text content
 * @returns {HTMLAnchorElement} The menu link
 * @example
 * const link = createMenuLink('/browse', 'Browse');
 * menuLinks.appendChild(link);
 */
export const createMenuLink = (href, text) => {
  const link = createNavLink(href, text);
  link.querySelector('.nav-btn-circle').classList.add('bg-zinc-900');
  link
    .querySelector('.nav-btn-bg')
    .classList.add('bg-purple-200', 'bg-opacity-50');
  link.querySelector('.nav-btn-bg').classList.remove('from-zinc-800');
  return link;
};
