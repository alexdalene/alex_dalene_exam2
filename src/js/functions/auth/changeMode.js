import { registerListener } from '../../listeners/auth/register.js';
import { loginListener } from '../../listeners/auth/login.js';
import { view } from '../../tools/view.js';
import { select } from '../../tools/select.js';
import { loginTemplate } from '../../templates/login.js';
import { signupTemplate } from '../../templates/signup.js';
import { validateRegister } from './validate.js';

export default function changeMode(mode) {
  if (typeof mode !== 'string') {
    return null;
  }

  const changeType = select('#change-type');

  if (mode === 'signup') {
    const clone = signupTemplate.content.cloneNode(true);
    view('#form-container', clone, true);

    changeType.textContent = 'Already have an account? Log In';

    const submitBtn = document.querySelector('#register-submit');
    submitBtn.addEventListener('click', async e => {
      e.preventDefault();
      const isOkay = await validateRegister();

      if (!isOkay) {
        return;
      }

      registerListener();
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
