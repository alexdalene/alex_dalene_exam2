import { getProfile } from '../../../api/profile/profile.js';
import { load } from '../../../storage/load.js';

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
