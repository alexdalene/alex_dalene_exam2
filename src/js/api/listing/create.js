import { apiBase } from '../base.js';
import { headers } from '../headers.js';

export async function createListing(title, description, tags, media, endsAt) {
  const response = await fetch(`${apiBase}/auction/listings`, {
    method: 'post',
    body: JSON.stringify({ title, description, tags, media, endsAt }),
    headers: headers('application/json'),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  return data;
}
