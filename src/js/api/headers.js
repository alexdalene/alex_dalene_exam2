import { load } from '../storage/load.js';

/**
 * Generates headers for API requests.
 * @param {string} ContentType - The content type of the request.
 * @returns {Object} - The generated headers object.
 */
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
