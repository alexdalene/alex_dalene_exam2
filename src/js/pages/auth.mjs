import { loginListener } from '../listeners/auth/login.mjs';
import { registerListener } from '../listeners/auth/register.mjs';
import { loginTemplate } from '../templates/login.mjs';
import { view, select } from '../tools/index.mjs';

const signup = document.querySelector('#form-register');
const loginLink = document.querySelector('#login-link');

signup.addEventListener('submit', e => {
  registerListener(e);
});

loginLink.addEventListener('click', e => {
  view('#form-container', loginTemplate.content, true);

  // Temporary fix for adding eventlistener to login form
  // This makes it so that if a user comes from a successful register the login form won't submit
  select('#form-login').addEventListener('submit', e => {
    loginListener(e);
  });
});
