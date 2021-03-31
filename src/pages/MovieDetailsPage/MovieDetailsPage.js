import React, { lazy, Suspense, Component } from "react";
import { NavLink, Route } from "react-router-dom";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import s from "./MovieDetailsPage.module.css";
import routes from "../../routes";
import x from "../../services/movieApi";
const { getDetailsMovie } = x;

const CastPage = lazy(() => import("../Cast/Cast.js"));

const ReviewsPage = lazy(() => import("../Reviews/Reviews.js"));

class MovieDetailsPage extends Component {
  state = {
    movieDetail: {},
    movieGenres: [],
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;

    getDetailsMovie(movieID)
      .then((result) => {
        this.setState({ movieDetail: result, movieGenres: result.genres });
      })
      .catch((error) => console.error(error));
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieDetail, movieGenres } = this.state;
    const { id } = movieDetail;

    return (
      <div className={s.container}>
        <button className={s.backBtn} type="button" onClick={this.handleGoBack}>
          Back
        </button>
        <div className={s.movieInfo}>
          <div>
            <MovieDetailsCard movieDetails={movieDetail} genres={movieGenres} />
          </div>
          <div>
            <ul className={s.box}>
              <li>
                <NavLink
                  className={s.link}
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: {
                      from: this.props.location?.state?.from,
                    },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={s.link}
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: {
                      from: this.props.location?.state?.from,
                    },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Suspense>
              <Route path={`${this.props.match.url}/cast`}>
                <CastPage movieId={id} />
              </Route>
              <Route path={`${this.props.match.url}/reviews`}>
                <ReviewsPage movieId={id} />
              </Route>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
