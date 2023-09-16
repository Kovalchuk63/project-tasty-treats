import axios from 'axios';
import { Notiflix} from 'notiflix';


export default class TastyTreatsAPI {
  #BASE_URL = 'https://tasty-treats-backend.p.goit.global/api';
  page = 1;
  limit = 6;
  category = null;
  time = null;
  area = null;
  ingredient = null;
  title = null;
    async fetchTreats(apiPath) {
    return await axios.get(`${this.#BASE_URL}${apiPath}`, {
      params: {
        page: this.page,
        limit: this.limit,
        category: this.category,
        time: this.time,
        area: this.area,
        ingredient: this.ingredient,
        title: this.title,
      },
    });
  }

  async createTreats(apiPath, formData) {
    try {
      const response = await axios.post(
        `${this.#BASE_URL}${apiPath}`,
        formData
      );
      return response.data;
    } catch (error) {
      Report.failure(error.response.data.message);
      Notify.error(error);
    }
  }

  async updateTreats(apiPath, formData) {
    try {
      const response = await axios.patch(
        `${this.#BASE_URL}${apiPath}`,
        formData
      );
      return response.data;
    } catch (error) {
      Report.failure(error.response.data.message);
    }
  }
}



const tastyTreatsApi = new TastyTreatsAPI();
export async function fetchDataByPath(
  apiPath,
  page,
  limit,
  category,
  time,
  area,
  ingredient,
  title
) {
  tastyTreatsApi.page = page;
  tastyTreatsApi.limit = limit;
  tastyTreatsApi.category = category;
  tastyTreatsApi.time = time;
  tastyTreatsApi.area = area;
  tastyTreatsApi.ingredient = ingredient;
  tastyTreatsApi.title = title;
  try {
    const { data } = await tastyTreatsApi.fetchTreats(apiPath);
    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
    return [];
  }
}



const refs = {
  allCards: document.querySelector('.cards-list'),
  modalCardCont: document.querySelector('.card-markup-modal'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  modalButtonClose: document.querySelector('.modal-btn-close'),
  giveRatingModalBtn: document.querySelector('.modal-give-rating'),
  ratingModal: document.querySelector('.rating-backdrop'),
  ratingButton: document.querySelector('.rating-send-btn'),
  ratingClose: document.querySelector('.modal-rating-close'),
  addToFavorite: document.querySelector('.modal-add-favorite'),
};

refs.allCards.addEventListener('click', handlerGetIdCard);

async function handlerGetIdCard(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  Loading.standard('Loading...', { svgColor: '#9bb537' });
  const buttonId = event.target.getAttribute('id');
  refs.ratingButton.id = buttonId;
  refs.addToFavorite.id = buttonId;
  const dataById = await fetchDataByPath(`/recipes/${buttonId}`);
  const modalMarkup = createMarkupModal(dataById);
  refs.modalCardCont.innerHTML = modalMarkup;
  fillStars();
  openModal();
  Loading.remove();
}

export function createMarkupModal(data) {
  const youtubeLink = data.youtube;

  function getYoutubeVideoId(url) {
    const videoIdMatch = url.match(/v=([^&]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

  const videoId = getYoutubeVideoId(youtubeLink);

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const ingredientsMarkup = data.ingredients
    .map(
      ingredient => `
  <li class="modal-card-ingr">
    ${ingredient.name}
    <span class="modal-card-measure">${ingredient.measure}</span>
  </li>
`
    )
    .join('');

  const modalCardMarkup = `
      <iframe
        src="${embedUrl}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="iframe-video"
      ></iframe>
      <h3 class="modal-recipe-name">${data.title}</h3>
      <div class="modal-general-inf">
     
        <ul class="modal-ingr-list">${ingredientsMarkup}</ul>
        <ul class="hashtag-btn-list-tablet list">${tagsMarkup}</ul>
        <p class="modal-recipe-instructions">${data.instructions}</p>
      </div>
`;

  return modalCardMarkup;
}

 export function openModal() {
  refs.modalButtonClose.addEventListener('click', closeModal);
  refs.modalBackdrop.addEventListener('click', closeModalOnBackdrop);
  
  window.addEventListener('keydown', handleKeyDown);
  refs.modalBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModal();
    closeRatingModal();
  }
}
 export function closeModal() {
  refs.modalButtonClose.removeEventListener('click', closeModal);
  refs.modalBackdrop.removeEventListener('click', closeModalOnBackdrop);
  window.removeEventListener('keydown', handleKeyDown);
  refs.modalBackdrop.classList.remove('is-open');
  document.body.style.overflow = 'auto';
  const youtubeIframe = document.querySelector('.iframe-video');
  youtubeIframe.src = '';
}

 export function closeModalOnBackdrop(event) {
  if (event && event.target === refs.modalBackdrop) {
    refs.modalButtonClose.removeEventListener('click', closeModal);
    refs.modalBackdrop.removeEventListener('click', closeModalOnBackdrop);
    window.removeEventListener('keydown', handleKeyDown);
    refs.modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = 'auto';
    const youtubeIframe = document.querySelector('.iframe-video');
    youtubeIframe.src = '';
  }
}



