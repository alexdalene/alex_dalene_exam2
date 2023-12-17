/**
 * @jest-environment jsdom
 */

import { login } from '../../api/auth/login.js';
import { loginListener } from './login.js';

jest.mock('../../api/auth/login.js');

describe('loginListener', () => {
  // Save the original window.location object
  const originalLocation = window.location;

  beforeAll(() => {
    // Delete the window.location object and set up a new one
    delete window.location;
    window.location = { href: 'http://127.0.0.1:8080' };
  });

  afterAll(() => {
    // Restore the original window.location object after the tests
    window.location = originalLocation;
  });

  it('should call login with correct parameters and redirect on success', async () => {
    // Arrange
    document.body.innerHTML = `
      <form id="login-form">
        <input name="email" value="test@stud.noroff.no" />
        <input name="password" value="password123" />
      </form>
    `;
    const form = document.getElementById('login-form');
    const event = {
      preventDefault: jest.fn(),
      target: form,
    };
    login.mockResolvedValue();

    // Act
    await loginListener(event);

    // Assert
    expect(event.preventDefault).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith('test@stud.noroff.no', 'password123');
    expect(window.location.href).toBe('/profile');
  });
});
