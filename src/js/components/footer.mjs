import { select } from '../tools/select.mjs';

export default function footer() {
  // Import necessary modules if needed
  // Example: import { createElement } from 'some-module';

  // Create footer element
  const footer = document.createElement('footer');
  footer.classList.add(
    'p-10',
    'pb-20',
    'items-center',
    'justify-center',
    'text-text',
    'font-body',
    'border-t',
    'border-surfaceVariant',
  );

  // Create inner div
  const innerDiv = document.createElement('div');
  innerDiv.classList.add('flex', 'justify-between');

  // Create left column
  const leftColumn = document.createElement('div');
  leftColumn.classList.add('flex', 'flex-col', 'gap-10', 'text-sm');

  // Create title and copyright paragraph
  const titleAndCopyright = document.createElement('div');
  titleAndCopyright.classList.add('flex', 'flex-col', 'gap-[5px]');

  const title = document.createElement('h4');
  title.classList.add('font-bold', 'font-heading', 'text-2xl');
  title.textContent = 'Bid-B';

  const copyright = document.createElement('p');
  copyright.textContent = '© 2023 Bid-B';

  titleAndCopyright.appendChild(title);
  titleAndCopyright.appendChild(copyright);

  // Create description paragraph
  const description = document.createElement('p');
  description.classList.add('max-w-xs');
  description.textContent =
    'Bid-B is a fictional site made for an exam through our school. The API is provided by Noroff Vocational School and is intended for us to practice with. The product(s) does not represent anything real and is purely for educational purposes.';

  leftColumn.appendChild(titleAndCopyright);
  leftColumn.appendChild(description);

  // Create right column with navigation, resources, and follow me sections
  const rightColumn = document.createElement('div');
  rightColumn.classList.add('flex', 'gap-20');

  // Navigation section
  const navigation = document.createElement('ul');
  navigation.classList.add('flex', 'flex-col', 'gap-[10px]');

  const navTitle = document.createElement('h5');
  navTitle.classList.add('font-bold');
  navTitle.textContent = 'Navigation';

  const homeLink = createLink('./', 'Home');
  const browseLink = createLink('./browse/', 'Browse');
  const loginLink = createLink('./auth/', 'Log In');
  const signupLink = createLink('./auth/', 'Sign Up');

  navigation.appendChild(navTitle);
  navigation.appendChild(homeLink);
  navigation.appendChild(browseLink);
  navigation.appendChild(loginLink);
  navigation.appendChild(signupLink);

  // Resources section
  const resources = document.createElement('ul');
  resources.classList.add('flex', 'flex-col', 'gap-[10px]');

  const resourcesTitle = document.createElement('h5');
  resourcesTitle.classList.add('font-bold');
  resourcesTitle.textContent = 'Resources';

  const figmaLink = createLink('', 'Figma', true);
  const githubLink = createLink('', 'GitHub Repo', true);

  resources.appendChild(resourcesTitle);
  resources.appendChild(figmaLink);
  resources.appendChild(githubLink);

  // Follow me section
  const followMe = document.createElement('ul');
  followMe.classList.add('flex', 'flex-col', 'gap-[10px]');

  const followMeTitle = document.createElement('h5');
  followMeTitle.classList.add('font-bold');
  followMeTitle.textContent = 'Follow me';

  const socialLinks = [
    createLink('', 'X', true),
    createLink('', 'LinkedIn', true),
    createLink('', 'Portfolio', true),
    createLink('', 'GitHub', true),
  ];

  followMe.appendChild(followMeTitle);
  socialLinks.forEach(link => followMe.appendChild(link));

  rightColumn.appendChild(navigation);
  rightColumn.appendChild(resources);
  rightColumn.appendChild(followMe);

  innerDiv.appendChild(leftColumn);
  innerDiv.appendChild(rightColumn);

  footer.appendChild(innerDiv);

  // Helper function to create link elements
  function createLink(href, text, icon) {
    const link = document.createElement('li');
    const anchor = document.createElement('a');
    const img = document.createElement('img');

    anchor.classList.add('flex', 'flex-reverse', 'gap-[5px]');
    anchor.href = href;
    anchor.textContent = text;
    img.src = './src/svg/icon/blank.svg';
    img.alt = '';
    link.appendChild(anchor);

    if (icon) {
      anchor.appendChild(img);
    }
    return link;
  }

  select('body').appendChild(footer);
}
