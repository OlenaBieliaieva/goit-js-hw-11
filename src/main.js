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

loader.style.display = 'none';

searchFormElem.addEventListener('submit', onSearchBtn);

function onSearchBtn(event) {
  event.preventDefault();

  images.innerHTML = '';
  loader.style.display = 'block';

  if (searchInputElem.value === '') {
    return alert`Please fill in the form`;
  }

  const inputValue = event.target.elements.search.value;

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

      images.innerHTML = ('beforeend', createMarkup(data.hits));

      const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      refreshPage.refresh();

      searchFormElem.reset();
    })
    .catch(err => {
      loader.style.display = 'none';
      console.log(err);
    });
}
