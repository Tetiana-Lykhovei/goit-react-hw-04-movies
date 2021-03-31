import React from "react";
import PropTypes from "prop-types";
import MoviePreview from "../MoviePreview/MoviePreview";
import s from "./MoviesGallery.module.css";

const MoviesGallery = ({ movies }) => {
  return (
    <ul className={s.gallery}>
      {movies.map((movie) => (
        <MoviePreview movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesGallery;
