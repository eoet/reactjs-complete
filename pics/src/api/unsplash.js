import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID s-38z6LzgKH0DtCOE-TKBiO6A5p2aJz97C7FCIIT2vg'
  }
})

const searchImages = (term) => {

}