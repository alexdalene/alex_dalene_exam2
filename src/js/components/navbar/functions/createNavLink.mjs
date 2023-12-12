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
    'px-2.5',
    'py-1',
    'flex',
    'items-center',
    'gap-1.5',
    'group',
    'relative',
  );

  // Create elements for the navigation link
  const circle = document.createElement('div');
  circle.classList.add(
    'z-10',
    'h-1.5',
    'w-1.5',
    'scale-0',
    'rounded-full',
    'bg-purple-300',
    'transition-transform',
    'duration-200',
    'group-hover:scale-100',
    'nav-btn-circle',
  );

  const textElement = document.createElement('div');
  textElement.classList.add('z-10');
  textElement.textContent = text;

  const bg = document.createElement('div');
  bg.classList.add(
    'absolute',
    'inset-0',
    'rounded-lg',
    'bg-gradient-to-tl',
    'from-zinc-800',
    'opacity-0',
    'transition-opacity',
    'duration-500',
    'group-hover:opacity-100',
    'nav-btn-bg',
  );

  // Append elements to the link
  link.appendChild(circle);
  link.appendChild(textElement);
  link.appendChild(bg);

  return link;
};
