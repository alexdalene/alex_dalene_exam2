import { select } from '../tools/select.mjs';

export default function navbar() {
  const header = document.createElement('header');
  header.classList.add(
    'bg-surface',
    'px-2',
    'md:px-16',
    'py-4',
    'flex',
    'justify-between',
    'items-center',
    'fixed',
    'top-0',
    'w-full',
  );

  const span = document.createElement('span');
  span.classList.add('font-heading', 'text-2xl', 'font-bold', 'text-text');
  span.textContent = 'Bid-B';

  const nav = document.createElement('nav');
  nav.classList.add('flex', 'gap-4');

  function link(button, icon, text, href) {
    const tag = document.createElement('a');
    tag.href = href;
    tag.classList.add(button);

    const img = document.createElement('img');
    img.src = `./src/svg/icon/${icon}.svg`;
    img.alt = '';

    const span = document.createElement('span');
    span.textContent = text;
    span.classList.add('hidden', 'sm:block');

    tag.append(img, span);
    return tag;
  }

  nav.append(
    link('btn-secondary', 'login', 'Login', './auth'),
    link('btn-primary', 'person_add', 'Register', './auth'),
  );

  header.append(span, nav);

  select('body').prepend(header);
}
