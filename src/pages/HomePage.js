import React, { Component } from "react";

import MoviesGallery from "../components/MoviesGallery/MoviesGallery";
import x from "../services/movieApi";
const { getTrendingMovies } = x;

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    getTrendingMovies()
      .then((result) => {
        this.setState({ movies: result });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <MoviesGallery movies={movies} />
      </>
    );
  }
}

export default HomePage;
