/**
 * Checks if an image is valid by loading it and resolving with the URL if successful,
 * or resolving with a placeholder URL if there is an error.
 * @param {string} url - The URL of the image to check.
 * @returns {Promise<string>} A promise that resolves with the URL of the image.
 */
export const checkMedia = url => {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      resolve(url);
    };

    img.onerror = function () {
      resolve('/src/images/placeholder.webp');
    };

    img.src = url;
  });
};
