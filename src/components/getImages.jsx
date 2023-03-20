const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33258201-876aeb9a1460bd69fc06236bf';
const config = '&image_type=photo&orientation=horizontal&per_page=12';

export const getImages = (searchText, page) => {
  return fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${KEY}${config}`);
};