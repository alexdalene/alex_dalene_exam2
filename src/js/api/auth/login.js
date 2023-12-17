import { save } from '../../storage/save.js';
import { apiBase } from '../base.js';
import { headers } from '../headers.js';
import { handleErrors } from '../../functions/auth/handleErrors.js';

export async function login(email, password) {
  const response = await fetch(`${apiBase}/auction/auth/login`, {
    method: 'post',
    body: JSON.stringify({ email, password }),
    headers: headers('application/json'),
  });

  const data = await response.json();

  if (!response.ok) {
    handleErrors(data);
    throw new Error(data.errors[0].message);
  }

  save('token', `${data.accessToken}`);
  save('username', `${data.name}`);
  save('credits', `${data.credits}`);
  return data;
}
