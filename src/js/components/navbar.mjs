import { select } from '../tools/select.mjs';
import { load } from '../storage/load.mjs';

export default function navbar() {
  const header = document.createElement('header');
  header.classList.add(
    'px-[2.5rem]',
    'py-[1.25rem]',
    'flex',
    'justify-between',
    'items-center',
  );

  const title = document.createElement('a');
  title.href = '/';
  title.classList.add('font-heading', 'text-2xl', 'font-bold', 'text-text');
  title.textContent = 'Bid-B';

  const nav = document.createElement('nav');
  nav.classList.add('flex', 'gap-[2.5rem]');

  const browse = document.createElement('a');
  browse.href = '/browse';
  browse.classList.add('text-text');
  browse.textContent = 'Browse';

  if (!load('token')) {
    const signUp = document.createElement('a');
    signUp.href = '/auth#signup';
    signUp.classList.add('text-primary');
    signUp.textContent = 'Create an account';

    const logIn = document.createElement('a');
    logIn.href = '/auth#login';
    logIn.classList.add('text-text');
    logIn.textContent = 'Log In';

    nav.append(browse, logIn, signUp);
  }

  if (load('token')) {
    const create = document.createElement('a');
    create.href = '/create';
    create.classList.add('text-text');
    create.textContent = 'Create a listing';

    const profile = document.createElement('a');
    profile.href = '/profile';
    profile.classList.add('text-primary');
    profile.textContent = 'Profile';

    nav.append(browse, create, profile);
  }

  header.append(title, nav);

  select('body').prepend(header);
}
