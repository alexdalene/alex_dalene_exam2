import { header } from '../components/navbar/setup/header.js';
import { nav } from '../components/navbar/setup/navigation.js';
import { button } from '../components/navbar/setup/menu.js';

/**
 * Animates the header based on scroll position and window width.
 */
export const animateHeader = () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.3,
      ease: 'power1.inOut',
    },
    scrollTrigger: {
      trigger: header,
      start: 'top top',
      end: 'bottom top',
      onEnterBack: () => {
        tl.reverse();
      },
    },
  });

  if (window.innerWidth > 1024) {
    tl.to(nav, {
      y: '-100',
      opacity: '0',
    })
      .to(button, {
        display: 'flex',
        opacity: '1',
      })
      .to(
        header,
        {
          top: '5',
        },
        '<',
      );
  } else {
    tl.to(header, {
      top: '5',
    });
  }
};
