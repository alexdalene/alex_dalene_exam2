import { navbar } from '../components/navbar/navbar.js';
import { loader } from '../components/loader/loader.js';
import { select } from '../tools/select.js';
import { getImageValue } from '../listeners/create/media.js';
import { validateCreate } from '../functions/create/validate.js';
import { createListener } from '../listeners/create/create.js';
import { appendTags } from '../functions/create/tags.js';

const render = async () => {
  try {
    loader.showLoader();
    await navbar();
    loader.hideLoader();

    const submitBtn = select('#btn-publish');
    submitBtn.addEventListener('click', async event => {
      try {
        event.preventDefault();
        const isOkay = await validateCreate();

        if (!isOkay) {
          return;
        }

        submitBtn.textContent = 'Publishing...';
        const data = await createListener(event);
        submitBtn.textContent = 'Publish';
        location.replace(`/browse/listing/?id=${data.id}`);
      } catch (error) {
        console.log(error);
      }
    });

    const mediaBtn = select('#btn-add-media');
    mediaBtn.addEventListener('click', getImageValue);

    const tagsInput = select('#listing-tags');
    tagsInput.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        appendTags(event);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

render();
