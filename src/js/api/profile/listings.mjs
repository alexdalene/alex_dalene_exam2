import { apiBase } from '../base.mjs';
import { headers } from '../headers.mjs';
import { load } from '../../storage/load.mjs';

export async function getProfileListings() {
  const username = load('username');
  const response = await fetch(
    `${apiBase}/auction/profiles/${username}/listings?_bids=true`,
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
