import { select } from '../tools/index.mjs';
import changeMode from '../functions/auth/changeMode.mjs';

const hash = window.location.hash;
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
