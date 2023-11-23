const signup = document.querySelector('#form-signup');
const login = document.querySelector('#form-template');
const container = document.querySelector('#form-container');
const loginLink = document.querySelector('#login-link');

signup.addEventListener('submit', e => {
  e.preventDefault();
  container.innerHTML = '';

  container.appendChild(login.content);
});

loginLink.addEventListener('click', e => {
  container.innerHTML = '';

  container.appendChild(login.content);
});
