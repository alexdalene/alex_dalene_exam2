import { registerListener } from '../listeners/auth/register.mjs';

const signup = document.querySelector('#form-register');
const login = document.querySelector('#form-template');
const container = document.querySelector('#form-container');
const loginLink = document.querySelector('#login-link');

signup.addEventListener('submit', e => {
  registerListener(e);
  container.innerHTML = '';

  container.appendChild(login.content);
});

loginLink.addEventListener('click', e => {
  container.innerHTML = '';

  container.appendChild(login.content);
});
