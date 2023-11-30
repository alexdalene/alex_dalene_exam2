import navbar from '../components/navbar.mjs';
import footer from '../components/footer.mjs';
import { checkStorage } from '../listeners/listings/listings.mjs';
import { displayListings } from '../views/listings/listings.mjs';

checkStorage();
navbar();
footer();

const searchInput = document.querySelector('#input-search');
searchInput.addEventListener('keyup', e => displayListings(e.target.value));
