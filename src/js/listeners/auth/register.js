import { register } from '../../api/auth/register.js';
import changeMode from '../../functions/auth/changeMode.js';

export async function registerListener() {
  const form = document.querySelector('#form-register');
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
