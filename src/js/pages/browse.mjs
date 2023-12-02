import navbar from '../components/navbar.mjs';
import { displayListings } from '../views/listings/listings.mjs';
import { navbarAnimations } from '../animations/navbar.mjs';
import { checkStorage } from '../functions/listings/checkStorage.mjs';

checkStorage();
navbar();
navbarAnimations();

const searchInput = document.querySelector('#input-search');
searchInput.addEventListener('keyup', e => displayListings(e.target.value));
