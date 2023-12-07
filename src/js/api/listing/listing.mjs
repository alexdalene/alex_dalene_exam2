import { apiBase } from '../base.mjs';
import { headers } from '../headers.mjs';

export async function getSpecificListing() {
  const url = new URL(location.href);
  let id = url.searchParams.get('id').toString();

  const response = await fetch(`${apiBase}/auction/listings/${id}`, {
    method: 'get',
    body: JSON.stringify(),
    headers: headers('application/json'),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  return data;
}
