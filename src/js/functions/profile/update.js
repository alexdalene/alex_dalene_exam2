import { updateAvatar } from '../../api/profile/update.js';
import { updateAvatarView } from '../../views/profile/avatar.js';

/**
 * Checks the avatar update and performs the necessary actions based on the button state.
 */
export const checkAvatar = () => {
  const update = document.querySelector('#update-avatar');
  const button = document.querySelector('#update-button');

  button.addEventListener('click', () => {
    if (button.textContent === 'check') {
      if (update.value && typeof update.value === 'string') {
        updateAvatar(update.value);
        updateAvatarView(update.value);
        update.value = '';
      }
      button.textContent = 'edit';
    } else {
      button.textContent = 'check';
    }
  });
};
