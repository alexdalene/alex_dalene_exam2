import { getProfile } from '../../../api/profile/profile.mjs';
import { load } from '../../../storage/load.mjs';

export const showCredits = async btn => {
  await getProfile();

  const credits = load('credits');
  let spanBtnOpen;

  if (!btn) {
    spanBtnOpen = document.getElementById('btn-open');
  } else {
    spanBtnOpen = btn;
  }

  if (!credits) {
    return;
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
