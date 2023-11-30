import navbar from '../components/navbar.mjs';
import { load, remove } from '../storage/index.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const token = load('token');

  if (!token) {
    window.location.href = '/auth#signup';
  }

  const logout = document.querySelector('#btn-logout');

  logout.addEventListener('click', () => {
    remove('token');
    remove('username');
    remove('credits');
    window.location.href = '/auth#login';
  });

  navbar();
});
