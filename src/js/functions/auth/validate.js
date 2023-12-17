/**
 * Validates the registration form inputs.
 * @returns {Promise<boolean>} Returns a promise that resolves to a boolean indicating whether the form inputs are valid or not.
 * @throws {Error} If an error occurs during the validation process.
 */
export const validateRegister = async () => {
  try {
    let isOkay = true;

    const name = document.querySelector('#register-name');
    const email = document.querySelector('#register-email');
    const password = document.querySelector('#register-password');

    const nameRegex = /^[a-zA-Z0-9æøåÆØÅ\s]{5,20}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@stud\.noroff\.no$/;
    const passwordRegex = /^.{8,}$/;

    const nameMessage = document.querySelector('#name-error');
    const emailMessage = document.querySelector('#email-error');
    const passwordMessage = document.querySelector('#password-error');

    if (!nameRegex.test(name.value)) {
      name.classList.remove('border-green-400');
      name.classList.add('border-red-400');

      nameMessage.textContent = 'Name must be between 5 and 20 characters';
      nameMessage.classList.remove('hidden');

      isOkay = false;
    } else {
      name.classList.remove('border-red-400');
      name.classList.add('border-green-400');

      nameMessage.classList.add('hidden');
    }

    if (!emailRegex.test(email.value)) {
      email.classList.remove('border-green-400');
      email.classList.add('border-red-400');

      emailMessage.textContent =
        'Email must be a valid student email from Noroff';
      emailMessage.classList.remove('hidden');

      isOkay = false;
    } else {
      email.classList.remove('border-red-400');
      email.classList.add('border-green-400');

      emailMessage.classList.add('hidden');
    }

    if (!passwordRegex.test(password.value)) {
      password.classList.remove('border-green-400');
      password.classList.add('border-red-400');

      passwordMessage.textContent = 'Password must be at least 8 characters';
      passwordMessage.classList.remove('hidden');

      isOkay = false;
    } else {
      password.classList.remove('border-red-400');
      password.classList.add('border-green-400');

      passwordMessage.classList.add('hidden');
    }

    return isOkay;
  } catch (error) {
    throw new Error(error);
  }
};
