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
