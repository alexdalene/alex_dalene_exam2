export const loader = {
  container: [
    'absolute',
    'inset-0',
    'bg-zinc-900',
    'z-50',
    'flex',
    'items-center',
    'justify-center',
  ],
  element: [
    'w-20',
    'h-20',
    'border-4',
    'border-zinc-400',
    'rounded-2xl',
    'animate-spin',
    'flex',
    'items-center',
    'justify-center',
  ],
  inner: ['w-2', 'h-2', 'bg-purple-300', 'rounded-full', 'animate-pulse'],

  loader: document.createElement('div'),
  spinner: document.createElement('div'),
  spinnerInner: document.createElement('div'),

  body: document.querySelector('body'),

  init() {
    this.loader.classList.add(...this.container);
    this.spinner.classList.add(...this.element);
    this.spinnerInner.classList.add(...this.inner);
  },

  showLoader() {
    this.init();
    this.spinner.appendChild(this.spinnerInner);
    this.loader.appendChild(this.spinner);
    this.body.appendChild(this.loader);
  },

  hideLoader() {
    this.body.removeChild(this.loader);
  },
};
