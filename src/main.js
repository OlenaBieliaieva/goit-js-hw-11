import { createMarkup } from './js/render-functions';
import { getPictures } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormElem = document.querySelector('.js-search');
const searchInputElem = document.querySelector('.input-search');
const images = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const refreshPage = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

loader.style.display = 'none';

searchFormElem.addEventListener('submit', onSearchBtn);

function onSearchBtn(event) {
  event.preventDefault();

  images.innerHTML = '';

  const inputValue = searchInputElem.value;

  if (inputValue.trim() === '') {
    return iziToast.error({
      position: 'topRight',
      message: 'Please fill in the form',
      messageColor: 'white',
    });
  }

  loader.style.display = 'block';

  getPictures(inputValue)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
        });
      }

      images.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      refreshPage.refresh();

      searchFormElem.reset();
    })
    .catch(err => {
      loader.style.display = 'none';
      console.log(err);
    });
}
