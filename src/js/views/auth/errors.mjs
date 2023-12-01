import { select } from '../../tools/select.mjs';

export const displayErrors = errors => {
  const name = select('#name-error');
  const email = select('#email-error');
  const password = select('#password-error');

  name.textContent = errors.name;
  email.textContent = errors.email;
  password.textContent = errors.password;

  name.classList.remove('hidden');
  email.classList.remove('hidden');
  password.classList.remove('hidden');

  setTimeout(() => {
    name.classList.add('hidden');
    email.classList.add('hidden');
    password.classList.add('hidden');
  }, 5000);
};
