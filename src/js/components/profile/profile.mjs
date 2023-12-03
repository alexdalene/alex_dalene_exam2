import { select } from '../../tools/select.mjs';
import { getProfile } from '../../api/profile/profile.mjs';

export const profile = async () => {
  const data = await getProfile();
  console.log(data);

  const user = {
    name: data.name,
    email: data.email,
    avatar: data.avatar,
    credits: data.credits,
    wins: data.wins.length,
    listings: data._count.listings,
  };

  const { name, email, avatar, credits, wins, listings } = user;

  const nameElement = select('#username');
  const emailElement = select('#email');
  const avatarElement = select('#avatar');
  const creditsElement = select('#credits');
  const listingsElement = select('#listings');
  const winsElement = select('#wins');

  nameElement.textContent = name;
  emailElement.textContent = email;
  avatarElement.src = avatar ? avatar : '../src/images/placeholder.webp';
  creditsElement.textContent = `$${credits}`;
  listingsElement.textContent = listings;
  winsElement.textContent = wins;
};
