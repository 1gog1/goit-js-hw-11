import axios from 'axios';
import { showLoader, hideLoader } from './loader';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49539042-7a7029324b91a0a3f345412f4';
export function getImages(searchQuery) {
  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  showLoader();

  return axios(BASE_URL, { params })
    .then(res => res.data)
    .finally(() => {
      hideLoader();
    });
}
