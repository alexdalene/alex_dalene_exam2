import { getProfile } from '../../../api/profile/profile.mjs';
import { load } from '../../../storage/load.mjs';

export const showCredits = async btn => {
  const credits = load('credits');
  if (!credits) {
    return;
  }

  await getProfile();

  let spanBtnOpen;

  if (!btn) {
    spanBtnOpen = document.getElementById('btn-open');
  } else {
    spanBtnOpen = btn;
  }

  gsap.to(spanBtnOpen, {
    duration: 1,
    text: {
      value: `$${credits}`,
      newClass: 'font-normal',
    },
    ease: 'power4.out',
    repeatDelay: 6,
    repeat: -1,
    yoyo: true,
  });
};
