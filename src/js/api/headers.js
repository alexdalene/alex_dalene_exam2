import { load } from '../storage/load.js';

export const headers = ContentType => {
  const token = load('token');
  const headers = {};

  if (ContentType) {
    headers['Content-Type'] = ContentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};
