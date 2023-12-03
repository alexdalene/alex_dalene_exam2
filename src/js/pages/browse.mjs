import { navbar } from '../components/navbar/navbar.mjs';
import { displayListings } from '../views/listings/listings.mjs';
import { checkStorage } from '../functions/listings/checkStorage.mjs';

checkStorage();
navbar();

const searchInput = document.querySelector('#input-search');
searchInput.addEventListener('keyup', e => displayListings(e.target.value));
