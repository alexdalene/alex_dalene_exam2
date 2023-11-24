import { load, remove } from '../storage/index.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const token = load('token');

  if (!token) {
    window.location.href = '/auth';
  }

  const logout = document.querySelector('#btn-logout');

  logout.addEventListener('click', () => {
    remove('token');
    window.location.href = '/';
  });
});
