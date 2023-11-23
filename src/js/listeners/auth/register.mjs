import { register } from '../../api/auth/register.mjs';
import { loginTemplate } from '../../templates/login.mjs';
import { select } from '../../tools/select.mjs';
import { view } from '../../tools/view.mjs';
import { loginListener } from './login.mjs';

export async function registerListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const password = data.get('password');
  const avatar = data.get('avatar');

  try {
    await register(name, email, password, avatar);
    view('#form-container', loginTemplate.content, true);
    select('#form-login').addEventListener('submit', e => {
      loginListener(e);
    });
  } catch (error) {
    console.log(error);
  }
}
