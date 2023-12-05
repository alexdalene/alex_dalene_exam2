import { apiBase } from '../base.mjs';
import { headers } from '../headers.mjs';
import { load } from '../../storage/load.mjs';

export async function updateAvatar(avatar) {
  const username = load('username');
  const response = await fetch(
    `${apiBase}/auction/profiles/${username}/media`,
    {
      method: 'put',
      body: JSON.stringify({ avatar }),
      headers: headers('application/json'),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  console.log(data);
  return data;
}
