 import axios from 'axios';
import Notiflix from 'notiflix';

const searchInput = document.querySelector(".search-input")
const time = document.querySelector(".time")
const area = document.querySelector(".area")
const ingredient = document.querySelector(".ingredient")
const resetButton = document.querySelector(".reset-button")
resetButton.addEventListener('click', () => {
  searchInput.value = '';

})

