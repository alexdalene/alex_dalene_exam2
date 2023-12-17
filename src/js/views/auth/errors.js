import { select } from '../../tools/select.js';

/**
 * Displays error messages for form fields.
 * @param {Object} errors - The error messages for each form field.
 */
export const displayErrors = errors => {
  const name = select('#name-error');
  const email = select('#email-error');
  const password = select('#password-error');

  if (!name && !email && !password) {
    return;
  }

  if (name) {
    name.textContent = errors.name;
    name.classList.remove('hidden');
    setTimeout(() => {
      name.classList.add('hidden');
    }, 5000);
  }

  if (email) {
    email.textContent = errors.email;
    email.classList.remove('hidden');
    setTimeout(() => {
      email.classList.add('hidden');
    }, 5000);
  }

  if (password) {
    password.textContent = errors.password;
    password.classList.remove('hidden');
    setTimeout(() => {
      password.classList.add('hidden');
    }, 5000);
  }
};
