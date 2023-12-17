/**
 * @jest-environment jsdom
 */

import { createListing } from '../../api/listing/create.js';
import { createListener } from './create.js';
import { imgArray } from '../../components/create/images-imgArray.js';

jest.mock('../../api/listing/create.js');

describe('createListener', () => {
  it('should call createListing with correct parameters and return result on success', async () => {
    // Arrange
    document.body.innerHTML = `
      <form id="form-create">
        <input name="listing-title" value="test title" />
        <textarea name="listing-description">test description</textarea>
        <input name="listing-tags" value="tag1" />
        <input name="listing-tags" value="tag2" />
        <input name="listing-deadline" value="2022-12-31" />
      </form>
    `;
    const form = document.getElementById('form-create');
    const event = {
      preventDefault: jest.fn(),
      target: form,
    };
    const result = { id: '1' };
    createListing.mockResolvedValue(result);

    // Act
    const actualResult = await createListener(event);

    // Assert
    expect(event.preventDefault).toHaveBeenCalled();
    expect(createListing).toHaveBeenCalledWith(
      'test title',
      'test description',
      ['tag1', 'tag2'],
      imgArray,
      '2022-12-31',
    );
    expect(actualResult).toBe(result);
  });
});
