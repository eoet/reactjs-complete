import axios from 'axios';

const KEY = 'AIzaSyDUGYbYenhHylQ9H_FRwFoSSBsg0d8plR4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});