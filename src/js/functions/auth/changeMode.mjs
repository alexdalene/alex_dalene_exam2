import {
  registerListener,
  loginListener,
} from '../../listeners/auth/index.mjs';
import { view, select } from '../../tools/index.mjs';
import { loginTemplate, signupTemplate } from '../../templates/index.mjs';

export default function changeMode(mode) {
  if (typeof mode !== 'string') {
    return null;
  }

  const changeType = select('#change-type');

  if (mode === 'signup') {
    const clone = signupTemplate.content.cloneNode(true);
    view('#form-container', clone, true);

    changeType.textContent = 'Already have an account? Log In';

    const signup = document.querySelector('#form-register');
    signup.addEventListener('submit', e => {
      registerListener(e);
    });
  }
  if (mode === 'login') {
    const clone = loginTemplate.content.cloneNode(true);
    view('#form-container', clone, true);

    changeType.textContent = "Don't have an account? Sign Up.";

    const login = select('#form-login');
    login.addEventListener('submit', e => {
      loginListener(e);
    });
  }
}
