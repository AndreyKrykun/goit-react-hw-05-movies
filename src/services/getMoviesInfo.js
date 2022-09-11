import axios from 'axios';
const API_KEY = 'ff98b74c6ada2972698b8eff6707845a';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const fetchTrendingToday = async () => {
  try {
    const response = await axios.get(`trending/${MEDIA_TYPE}/${TIME_WINDOW}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async movieId => {
  try {
    const ID = Number(movieId);
    const response = await axios.get(`movie/${ID}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieBySearch = async query => {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
