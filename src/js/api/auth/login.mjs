import { save } from '../../storage/save.mjs';
import { apiBase } from '../base.mjs';
import { headers } from '../headers.mjs';

export async function login(email, password) {
  const response = await fetch(`${apiBase}/auction/auth/login`, {
    method: 'post',
    body: JSON.stringify({ email, password }),
    headers: headers('application/json'),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors[0].message);
  }

  save('token', `${data.accessToken}`);
  save('username', `${data.name}`);
  save('credits', `${data.credits}`);
  return data;
}
