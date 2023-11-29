import { select } from '../tools/index.mjs';
import changeMode from '../functions/auth/changeMode.mjs';
import { load } from '../storage/load.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const token = load('token');

  if (token) {
    window.location.href = '/';
  }
});

const hash = window.location.hash;

if (!hash) {
  window.location.href = '/auth#signup';
}

const changeType = select('#change-type');

if (hash === '#login') {
  changeMode('login');
} else if (hash === '#signup') {
  changeMode('signup');
}

changeType.addEventListener('click', () => {
  const hash = window.location.hash;
  if (hash === '#login') {
    window.location.assign('./#signup');
    changeMode('signup');
  } else if (hash === '#signup') {
    window.location.assign('./#login');
    changeMode('login');
  }
});
