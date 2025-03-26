import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { clearGalleryList, renderGalleryList } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements['search-text'].value.trim();

  if (!inputValue) {
    iziToast.error({
      message: 'Empty input, enter a search value!',
      position: 'topRight',
    });
    return;
  }
  getImages(inputValue)
    .then(({ hits }) => {
      clearGalleryList();
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      renderGalleryList(hits);
    })
    .catch(error => console.log(error));
}
