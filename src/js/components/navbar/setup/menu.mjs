import { load } from '../../../storage/load.mjs';

// Create button element
const button = document.createElement('button');
button.id = 'menu-container';
button.classList.add(
  'flex',
  'items-center',
  'gap-1',
  'bg-zinc-700',
  'text-zinc-200',
  'font-bold',
  'px-3',
  'py-0.5',
  'rounded-full',
  'lg:hidden',
  'relative',
  'lg:opacity-0',
);

// Create elements for the button
const circleBtn = document.createElement('div');
circleBtn.classList.add('nav-btn-circle', 'scale-100');

const spanBtnOpen = document.createElement('span');
spanBtnOpen.id = 'btn-open';
spanBtnOpen.textContent = 'Menu';

if (load('token')) {
  spanBtnOpen.textContent = `Hi, ${load('username')}`;
}

// Append elements to the button
button.appendChild(circleBtn);
button.appendChild(spanBtnOpen);

export { button };
