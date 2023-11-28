import { apiBase } from '../base.mjs';
import { headers } from '../headers.mjs';

export async function getListings() {
  const response = await fetch(
    `${apiBase}/auction/listings?_bids=true&_active=true`,
    {
      method: 'get',
      body: JSON.stringify(),
      headers: headers('application/json'),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  return data;
}
