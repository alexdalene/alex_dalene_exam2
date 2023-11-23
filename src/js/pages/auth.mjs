import { registerListener } from '../listeners/auth/register.mjs';
import { loginTemplate } from '../templates/login.mjs';
import { clear, select } from '../tools/index.mjs';

const signup = document.querySelector('#form-register');
const container = document.querySelector('#form-container');
const loginLink = document.querySelector('#login-link');

signup.addEventListener('submit', e => {
  registerListener(e);
});

loginLink.addEventListener('click', e => {
  clear(select('#form-container'));
  select('#form-container').appendChild(loginTemplate.content);
});
