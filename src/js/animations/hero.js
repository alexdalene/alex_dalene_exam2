gsap.registerPlugin(TextPlugin);

export const heroAnimations = () => {
  gsap.to('h1', {
    delay: 3,
    text: {
      delimiter: ' ',
      value:
        'All you have to do is <span class="relative z-10 text-zinc-900 before:absolute before:inset-0 before:-z-10 before:scale-110 before:rounded-full before:bg-purple-300">sign up</span>',
      speed: 0.4,
    },
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,
  });
};
