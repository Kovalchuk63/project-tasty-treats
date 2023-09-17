import debounce from 'lodash.debounce';
import { searchOnTitle } from '../utils/request-cook.js';
import Notiflix, { Loading } from 'notiflix';

const searchInput = document.querySelector(".search-input")
const time = document.querySelector(".time")
const area = document.querySelector(".area")
const ingredient = document.querySelector(".ingredient")
const resetButton = document.querySelector(".reset-button")

resetButton.addEventListener('click', function ({ target }) {
    document.querySelector('.time').value = '';
    document.querySelector('.search-input').value = '';
    document.querySelector('.area').value = '';
    document.querySelector('.ingredient').value = '';
    onClickAllCategoriesButton(target);
  })

