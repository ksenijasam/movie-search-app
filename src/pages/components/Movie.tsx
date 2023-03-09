import React, { useState } from 'react';

import MovieModal from '../UI/MovieModal';

import classes from './Movie.module.css';

interface movieDetails {
  title: string;
  moviePoster: string,
  year: string,
  plot: string,
  genre: string,
  closeModal: () => void
}

const Movie: React.FC<movieDetails> = (props: movieDetails) => {
  const [openModal, setOpenModal] = useState(false);

  const openMovieDetailsModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div>
      {openModal && <MovieModal
        title={props.title}
        moviePoster={props.moviePoster}
        year={props.year} plot={props.plot}
        genre={props.genre}
        closeModal={closeModal}
      />}

      <div onClick={openMovieDetailsModal} className={classes.center}>

        <div className={classes.centerContent}>
          <h2>{props.title}</h2>
        </div>

        <img src={props.moviePoster} width="100%%" height="400" alt="Movie Poster"></img>

        <div className={classes.centerContent}>
          <h2>Released in {props.year}</h2>
          <h4> Genre {props.genre}</h4>
        </div>

      </div>
    </div>
  );
};

export default Movie;
