import { select } from '../tools/select.mjs';

export default function navbar() {
  const header = document.createElement('header');
  header.classList.add(
    'px-[2.5rem]',
    'py-[1.25rem]',
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
  nav.classList.add('flex', 'gap-[2.5rem]');

  const signUp = document.createElement('a');
  signUp.href = './auth';
  signUp.classList.add('text-primary');
  signUp.textContent = 'Create an account';

  const logIn = document.createElement('a');
  logIn.href = './auth';
  logIn.classList.add('text-text');
  logIn.textContent = 'Log In';

  nav.append(logIn, signUp);

  header.append(span, nav);

  select('body').prepend(header);
}
