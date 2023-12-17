import { select } from '../tools/select.js';
import changeMode from '../functions/auth/changeMode.js';
import { load } from '../storage/load.js';

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
