import React, { Component } from "react";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import s from "./MoviesPage.module.css";
import x from "../../services/movieApi";
const { getSearchMovie } = x;

class MoviesPage extends Component {
  state = {
    query: "",
    searchMovies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      getSearchMovie(this.props.location.search.slice(7)).then((result) =>
        this.setState({ searchMovies: result })
      );
    }
  }

  handleChange = (ev) => {
    this.setState({ query: ev.currentTarget.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const history = this.props.history;

    getSearchMovie(this.state.query)
      .then((result) => {
        if (result.length === 0) {
          alert(`Sorry! This movie is not found`);
        }
        this.setState({ searchMovies: result });
      })
      .catch((error) => console.log(error));

    history.push({
      pathname: history.location.pathname,
      search: `?query=${this.state.query}`,
      key: history.location.key,
    });

    this.setState({ query: "" });
  };

  render() {
    const { searchMovies } = this.state;
    return (
      <div className={s.search}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <input
            className={s.input}
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
          />
          <button className={s.searchBtn} type="submit">
            <span>Search</span>
          </button>
        </form>
        <MoviesGallery movies={searchMovies} />
      </div>
    );
  }
}

export default MoviesPage;
