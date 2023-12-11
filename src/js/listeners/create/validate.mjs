export const validate = () => {
  const titleRegex = /^.{5,}$/;
  const descriptionRegex = /^.{10,}$/;
  const tagsRegex = /^.{3,}$/;

  const title = document.querySelector('#listing-title');
  const description = document.querySelector('#listing-description');
  const tags = document.querySelectorAll('#listing-tags');

  const button = document.querySelector('#btn-publish');

  if (!titleRegex.test(title.value)) {
    console.log('Invalid title');
    title.classList.add('border-red-400');
    return;
  }

  if (!descriptionRegex.test(description.value)) {
    console.log('Invalid description');
    description.classList.add('border-red-400');
    return;
  }

  if (!tagsRegex.test(tags.value)) {
    tags.classList.add('border-red-400');
    console.log('Invalid tags');
    return;
  }

  if (
    !titleRegex.test(title) &&
    !descriptionRegex.test(description) &&
    !tags.every(tag => tagsRegex.test(tag)) &&
    !endsAtRegex.test(endsAt)
  ) {
    button.disabled = true;
    return;
  }
};
