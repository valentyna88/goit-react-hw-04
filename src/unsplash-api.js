import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://api.unsplash.com/search/photos';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query: query,
        page: page,
        per_page: 10,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export default fetchImages;
