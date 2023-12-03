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
);

// Create elements for the button
const circleBtn = document.createElement('div');
circleBtn.classList.add('nav-btn-circle', 'scale-100');

const spanBtnOpen = document.createElement('span');
spanBtnOpen.id = 'btn-open';
spanBtnOpen.textContent = 'Menu';

// Append elements to the button
button.appendChild(circleBtn);
button.appendChild(spanBtnOpen);

export { button };
