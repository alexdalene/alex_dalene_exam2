import { getProfile } from '../../../api/profile/profile.js';
import { load } from '../../../storage/load.js';

/**
 * Shows the credits on the button.
 * @param {HTMLElement} btn - The button element to show the credits on.
 * @returns {Promise<void>} - A promise that resolves when the credits are shown.
 */
export const showCredits = async btn => {
  await getProfile();

  const credits = load('credits');
  if (!credits) {
    return;
  }

  let spanBtnOpen;

  if (!btn) {
    spanBtnOpen = document.getElementById('btn-open');
  } else {
    spanBtnOpen = btn;
  }

  gsap.killTweensOf(spanBtnOpen);

  gsap.fromTo(
    spanBtnOpen,
    {
      text: {
        value: 'Menu',
      },
    },
    {
      duration: 1,
      text: {
        value: `$${credits}`,
        newClass: 'font-normal',
      },
      ease: 'power4.out',
      repeatDelay: 6,
      repeat: -1,
      yoyo: true,
    },
  );
};
