import navbar from '../components/navbar.mjs';
import { displayListings } from '../views/listings/listings.mjs';

navbar();
displayListings();

const searchInput = document.querySelector('#input-search');
searchInput.addEventListener('keyup', e => displayListings(e.target.value));
