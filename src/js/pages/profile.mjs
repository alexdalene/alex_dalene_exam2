import { load } from '../storage/load.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const token = load('token');

  if (!token) {
    window.location.href = '/auth';
  }

  const logout = document.querySelector('#btn-logout');

  logout.addEventListener('click', () => {
    window.location.href = '/';
  });
});
