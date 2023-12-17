import { apiBase } from '../base.js';
import { headers } from '../headers.js';
import { storePosts } from '../../storage/store.js';

export async function getListings() {
  try {
    const response = await fetch(
      `${apiBase}/auction/listings?_bids=true&_active=true&sort=created`,
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

    console.log('Fetch called');
    storePosts(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
