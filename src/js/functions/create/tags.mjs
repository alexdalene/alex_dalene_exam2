import { select } from '../../tools/select.mjs';
import { tagArray } from './tags-array.mjs';

export const appendTags = event => {
  const tag = event.target.value.trim();
  const tagMessage = select('#tag-message');

  if (!tag || tag.length < 3) return;

  const tags = select('#tags');

  const tagElement = document.createElement('span');
  tagElement.classList.add(
    'inline-block',
    'bg-zinc-700',
    'rounded-full',
    'px-3',
    'py-1',
    'text-zinc-200',
    'mr-1',
    'mb-1',
    'relative',
    'group',
  );
  tagElement.textContent = tag;

  const removeTag = document.createElement('span');
  removeTag.classList.add(
    'material-symbols-outlined',
    'cursor-pointer',
    'absolute',
    '-right-4',
    '-top-4',
    'opacity-0',
    'group-hover:opacity-100',
    'transition-opacity',
    'scale-75',
    'bg-purple-300',
    'p-1',
    'rounded-full',
    'text-zinc-900',
    'z-10',
  );
  removeTag.textContent = 'delete';
  removeTag.addEventListener('click', () => {
    const index = tagArray.findIndex(tag => tag === tagElement.textContent);
    tagArray.splice(index, 1);
    tagElement.remove();
  });

  if (tagArray.length > 4 - 1) {
    tagMessage.classList.remove('text-zinc-400');
    tagMessage.classList.add('text-red-400');
    tagMessage.textContent = 'You can only add 4 tags';
    event.target.value = '';
    return;
  }

  if (tagArray.includes(tag)) {
    tagMessage.classList.remove('text-zinc-400');
    tagMessage.classList.add('text-red-400');
    tagMessage.textContent = 'You already added this tag';
    event.target.value = '';
    return;
  } else {
    tagMessage.classList.remove('text-red-400');
    tagMessage.classList.add('text-zinc-400');
    tagMessage.textContent = 'Add up to 4 tags';
  }

  tagArray.push(tag);

  tagElement.appendChild(removeTag);
  tags.appendChild(tagElement);
  event.target.value = '';
};
