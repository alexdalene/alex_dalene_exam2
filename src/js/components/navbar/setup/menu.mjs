import { showCredits } from '../functions/credits.mjs';

gsap.registerPlugin(TextPlugin);

const button = document.createElement('button');
button.id = 'menu-container';
button.classList.add(
  'flex',
  'items-center',
  'gap-1.5',
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
circleBtn.classList.add(
  'z-10',
  'h-1.5',
  'w-1.5',
  'rounded-full',
  'bg-purple-300',
);

const spanBtnOpen = document.createElement('span');
spanBtnOpen.id = 'btn-open';
spanBtnOpen.textContent = 'Menu';

showCredits(spanBtnOpen);

// Append elements to the button
button.appendChild(circleBtn);
button.appendChild(spanBtnOpen);

export { button };
