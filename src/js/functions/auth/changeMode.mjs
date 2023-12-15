import { registerListener } from '../../listeners/auth/register.mjs';
import { loginListener } from '../../listeners/auth/login.mjs';
import { view } from '../../tools/view.mjs';
import { select } from '../../tools/select.mjs';
import { loginTemplate } from '../../templates/login.mjs';
import { signupTemplate } from '../../templates/signup.mjs';
import { validateRegister } from './validate.mjs';

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
