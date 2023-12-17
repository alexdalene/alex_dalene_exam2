import { navbar } from './js/components/navbar/navbar.js';
import { heroAnimations } from './js/animations/hero.js';
import { loader } from './js/components/loader/loader.js';

const render = async () => {
  try {
    loader.showLoader();
    await navbar();
    heroAnimations();
    loader.hideLoader();
  } catch (error) {
    console.error(error);
  }
};

render();
