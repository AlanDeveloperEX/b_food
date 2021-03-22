import axios from 'axios';

// EX https://developers.zomato.com/api/v2.1/search?city_id=saopaulo&establishment_id=1&cuisines=all&order=asc&start=0&count=6
const api = axios.create({
  baseURL : 'https://developers.zomato.com/api/v2.1'
  // baseURL : 'https://developers.zomato.com/api/v2.1/search?city_id=1&establishment_id=1&cuisines=1&order=asc&start=0&count=10'
});

export default api; 