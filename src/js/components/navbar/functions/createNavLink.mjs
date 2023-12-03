/**
 * Create a navigation link
 * @param {string} href - The link's href attribute
 * @param {string} text - The link's text content
 * @returns {HTMLAnchorElement} The navigation link
 * @example
 * const link = createNavLink('/browse', 'Browse');
 * nav.appendChild(link);
 */
export const createNavLink = (href, text) => {
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
};
