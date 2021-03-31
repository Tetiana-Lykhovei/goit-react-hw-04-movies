import React, { Component } from "react";
import s from "./Reviews.module.css";
import x from "../../services/movieApi";
const { getMovieReviews } = x;

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;

    getMovieReviews(movieId).then((result) => {
      this.setState({ reviews: result.results });
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h1 className={s.title}>Reviews</h1>
        {reviews.length > 0 ? (
          <ul className={s.list}>
            {reviews.map(({ id, author, content }) => {
              return (
                <li className={s.post} key={id}>
                  <p className={s.author}>{author}</p>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>This movie has no reviews yet.</p>
        )}
      </>
    );
  }
}

export default Reviews;
