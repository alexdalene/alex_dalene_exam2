import { select } from '../tools/select.mjs';
gsap.registerPlugin(TextPlugin);

export const navbarAnimations = () => {
  const open = select('#btn-open');
  const close = select('#btn-close');
  const menu = select('#dropdown-menu');

  const tl = gsap.timeline();

  open.addEventListener('click', () => {
    tl.restart();
    tl.to(open, {
      text: 'Close',
      ease: 'ease-in',
      color: 'rgb(24 24 27)',
      duration: 0.2,
    }).to(
      menu,
      {
        opacity: '1',
        width: '12rem',
        height: '12rem',
        duration: 0.4,
        ease: 'power2.inOut',
        display: 'flex',
      },
      '<',
    );
  });

  close.addEventListener('click', () => {
    tl.reverse();
  });
};
