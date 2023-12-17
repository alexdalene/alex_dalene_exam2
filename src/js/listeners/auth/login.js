import { login } from '../../api/auth/login.js';

/**
 * Handles the login form submission event.
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the login process is complete.
 */
export async function loginListener(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const email = data.get('email');
  const password = data.get('password');

  try {
    await login(email, password);
    window.location.href = '/profile';
  } catch (error) {
    console.log(error);
  }
}
