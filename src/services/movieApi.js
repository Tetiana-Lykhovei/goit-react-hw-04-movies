import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "d407875648143dbc537f3d16fab2b882";

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    const data = await response.data;
    const results = await data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovie(searchQuery) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
    );
    const data = await response.data;
    const results = await data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function getDetailsMovie(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCast(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getTrendingMovies,
  getSearchMovie,
  getDetailsMovie,
  getMovieCast,
  getMovieReviews,
};
