import { displayErrors } from '../../views/auth/errors.js';

/**
 * Handles errors returned from the server and displays them on the UI.
 * @param {Object} data - The error data returned from the server.
 */
export const handleErrors = data => {
  const errorArr = data.errors;

  const nameError = errorArr.find(
    ({ message }) =>
      message.toLowerCase().includes('name') ||
      message.toLowerCase().includes('profile'),
  );

  const emailError = errorArr.find(({ message }) =>
    message.toLowerCase().includes('email'),
  );

  const passwordError = errorArr.find(({ message }) =>
    message.toLowerCase().includes('password'),
  );

  const errors = {
    name: nameError ? nameError.message : '',
    email: emailError ? emailError.message : '',
    password: passwordError ? passwordError.message : '',
  };

  displayErrors(errors);
};
