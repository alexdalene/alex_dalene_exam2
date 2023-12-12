import { apiBase } from '../base.mjs';
import { headers } from '../headers.mjs';
import { load } from '../../storage/load.mjs';
import { save } from '../../storage/save.mjs';

export async function getProfile() {
  const username = load('username');
  const response = await fetch(
    `${apiBase}/auction/profiles/${username ? username : 'sherlock'}`,
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

  save('credits', `${data.credits}`);
  return data;
}
