import { select } from '../tools/select.mjs';
gsap.registerPlugin(TextPlugin);

export const navbarAnimations = () => {
  const open = select('#btn-open');
  const close = select('#btn-close');
  const menu = select('#dropdown-menu');
  const container = select('#menu-container');

  const tl = gsap.timeline();

  open.addEventListener('click', () => {
    tl.restart();
    tl.to(open, {
      text: 'Close',
      ease: 'ease-in',
      color: 'rgb(24 24 27)',
      duration: 0.3,
    })
      .to(
        container,
        {
          backgroundColor: 'rgb(216 180 254)',
        },
        '<',
      )
      .to(
        menu,
        {
          right: '0',
          display: 'flex',
        },
        '<',
      )
      .to(menu, {
        opacity: '1',
        width: '15rem',
        height: '10rem',
        duration: 0.8,
        ease: 'elastic',
      });
  });

  close.addEventListener('click', () => {
    tl.reverse();
  });
};
