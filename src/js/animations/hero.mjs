gsap.registerPlugin(TextPlugin);

export const heroAnimations = () => {
  gsap.to('h1', {
    delay: 2,
    text: {
      delimiter: ' ',
      value: 'All you have to do is <span class="hero-text-bg">sign up</span>',
      speed: 0.4,
      padSpace: true,
    },
  });
};
