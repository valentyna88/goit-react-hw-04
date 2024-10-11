import axios from 'axios';

const API_KEY = 'qSg347jVb1hWhhBVkTz2gPP9EKim76v11DHuIY7tt8M';
axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        query,
        page,
        per_page: 10,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
};

export default fetchImages;
