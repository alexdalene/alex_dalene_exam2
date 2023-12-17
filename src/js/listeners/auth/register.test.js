/**
 * @jest-environment jsdom
 */

import { register } from '../../api/auth/register.js';
import { registerListener } from './register.js';
import changeMode from '../../functions/auth/changeMode.js';

jest.mock('../../api/auth/register.js');
jest.mock('../../functions/auth/changeMode.js');

describe('registerListener', () => {
  it('should call register with correct parameters and redirect on success', async () => {
    // Arrange
    document.body.innerHTML = `
      <form id="form-register">
        <input name="name" value="test name" />
        <input name="email" value="test@example.com" />
        <input name="password" value="password" />
        <input name="avatar" value="avatar.png" />
      </form>
    `;

    register.mockResolvedValue();

    // Act
    await registerListener();

    // Assert
    expect(register).toHaveBeenCalledWith(
      'test name',
      'test@example.com',
      'password',
      'avatar.png',
    );
    expect(window.location.hash).toBe('#login');
    expect(changeMode).toHaveBeenCalledWith('login');
  });
});
