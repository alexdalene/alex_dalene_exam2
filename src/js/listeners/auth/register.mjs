import { register } from '../../api/auth/register.mjs';
import changeMode from '../../functions/auth/changeMode.mjs';

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
    window.location.assign('./#login');
    changeMode('login');
  } catch (error) {
    console.log(error);
  }
}
