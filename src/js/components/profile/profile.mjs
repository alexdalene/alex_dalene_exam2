import { select } from '../../tools/select.mjs';
import { getProfile } from '../../api/profile/profile.mjs';
import { remove } from '../../storage/remove.mjs';
import { profileEdit } from './profile-edit.mjs';

export const profile = async () => {
  const data = await getProfile();

  const {
    name,
    email,
    avatar,
    credits,
    wins,
    _count: { listings },
  } = data;

  const winsCount = wins.length > 0 ? wins.length : 0;

  const container = select('#profile-info');
  container.innerHTML = '';

  // Create main container element
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('flex', 'flex-col', 'gap-5', 'sm:flex-row');

  // Create user info container
  const userInfoContainer = document.createElement('div');
  userInfoContainer.classList.add(
    'group',
    'relative',
    'mx-auto',
    'aspect-square',
    'h-40',
    'w-fit',
    'overflow-hidden',
    'rounded-full',
    'border-2',
    'border-dashed',
    'border-purple-300',
    'p-1',
    'sm:mx-0',
  );

  // Create overlay for user info container
  const overlay = document.createElement('div');
  overlay.classList.add(
    'absolute',
    'inset-0',
    'grid',
    'h-full',
    'w-full',
    'cursor-pointer',
    'place-content-center',
    'rounded-full',
    'bg-black',
    'bg-opacity-30',
    'opacity-0',
    'transition-opacity',
    'group-hover:opacity-100',
  );

  overlay.addEventListener('click', () => {
    const body = select('body');

    body.appendChild(profileEdit(avatar));
  });

  // Create edit icon
  const editIcon = document.createElement('span');
  editIcon.classList.add(
    'material-symbols-outlined',
    'rounded-xl',
    'bg-purple-300',
    'p-2',
    'text-zinc-900',
  );
  editIcon.textContent = 'edit';

  // Append edit icon to overlay
  overlay.appendChild(editIcon);

  // Create user image
  const userImage = document.createElement('img');
  userImage.src = avatar ? avatar : '../src/images/placeholder.webp';
  userImage.alt = 'Image of a user';
  userImage.classList.add('h-full', 'w-full', 'rounded-full', 'object-cover');

  // Append overlay and user image to user info container
  userInfoContainer.appendChild(overlay);
  userInfoContainer.appendChild(userImage);

  // Append user info container to main container
  mainContainer.appendChild(userInfoContainer);

  // Create user details container
  const userDetailsContainer = document.createElement('div');
  userDetailsContainer.classList.add(
    'flex',
    'flex-col',
    'justify-start',
    'gap-5',
  );

  const userDetailsContainerInner = document.createElement('div');
  userDetailsContainerInner.classList.add(
    'flex',
    'flex-col',
    'text-center',
    'sm:text-start',
  );

  // Create user name and email
  const userName = document.createElement('h2');
  userName.classList.add('font-heading', 'text-2xl');
  userName.textContent = name;

  const userEmail = document.createElement('p');
  userEmail.classList.add('text-zinc-400');
  userEmail.textContent = email;

  // Append user name and email to user details container
  userDetailsContainerInner.appendChild(userName);
  userDetailsContainerInner.appendChild(userEmail);
  userDetailsContainer.appendChild(userDetailsContainerInner);

  // Create user stats container
  const userStatsContainer = document.createElement('div');
  userStatsContainer.classList.add('flex', 'gap-2.5');

  // Helper function to create stat elements
  function createStat(statValue, statLabel, id) {
    const statElement = document.createElement('div');
    statElement.classList.add(
      'flex',
      'basis-1/3',
      'flex-col',
      'rounded-xl',
      'border',
      'border-zinc-800',
      'px-2.5',
      'py-2',
    );

    const statValueElement = document.createElement('div');
    statValueElement.classList.add('font-bold');
    statValueElement.textContent = statValue;

    const statLabelElement = document.createElement('div');
    statLabelElement.classList.add('text-zinc-400');
    statLabelElement.textContent = statLabel;

    statElement.appendChild(statValueElement);
    statElement.appendChild(statLabelElement);

    statElement.id = id;

    return statElement;
  }

  // Create and append user stats
  userStatsContainer.appendChild(
    createStat(`$${credits}`, 'Credits', 'credits'),
  );
  userStatsContainer.appendChild(createStat(listings, 'Listings', 'listings'));
  userStatsContainer.appendChild(createStat(winsCount, 'Wins', 'wins'));

  // Append user stats container to user details container
  userDetailsContainer.appendChild(userStatsContainer);

  // Append user details container to main container
  mainContainer.appendChild(userDetailsContainer);

  // Create logout button container
  const logoutButtonContainer = document.createElement('div');
  logoutButtonContainer.classList.add(
    'mt-2',
    'flex',
    'justify-end',
    'sm:mt-0',
    'sm:h-fit',
    'sm:justify-start',
  );

  // Create logout button
  const logoutButton = document.createElement('button');
  logoutButton.classList.add(
    'flex',
    'items-center',
    'gap-1',
    'rounded-xl',
    'bg-zinc-200',
    'px-2.5',
    'py-1',
    'text-zinc-900',
  );
  logoutButton.textContent = 'Logout';
  logoutButton.id = 'btn-logout';
  logoutButton.addEventListener('click', () => {
    remove('token');
    remove('username');
    remove('credits');

    location.href = '/auth#signup';
  });

  const logoutIcon = document.createElement('span');
  logoutIcon.classList.add('material-symbols-outlined');
  logoutIcon.textContent = 'logout';

  logoutButton.prepend(logoutIcon);

  // Append logout button to logout button container
  logoutButtonContainer.appendChild(logoutButton);

  container.appendChild(mainContainer);
  container.appendChild(logoutButtonContainer);
};
