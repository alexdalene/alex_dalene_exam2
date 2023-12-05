export const updateAvatarView = avatar => {
  const container = document.querySelector('#avatar-container');
  const image = document.querySelector('#avatar');

  const tl = gsap.timeline({
    onComplete: () => {
      image.src = avatar;
      tl.reverse();
    },
  });

  tl.to(container, {
    x: '-100%',
    opacity: 0,
    ease: 'ease-in-out',
  });
};
