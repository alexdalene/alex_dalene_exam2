import { navbar } from './js/components/navbar/navbar.mjs';
import { heroAnimations } from './js/animations/hero.mjs';
import { loader } from './js/components/loader/loader.mjs';

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
