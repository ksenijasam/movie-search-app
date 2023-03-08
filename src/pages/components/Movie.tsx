import React, { useState } from 'react';

import MovieModal from '../UI/MovieModal';

interface movieDetails {
  title: string;
  moviePoster: string,
  year: string,
  plot: string,
  genre: string
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
      <div onClick={openMovieDetailsModal}>
        <h2>{props.title}</h2>
        <img src={props.moviePoster} alt="Movie Poster"></img>
        <h2>{props.year}</h2>
        <h2>{props.plot}</h2>
        <h2>{props.genre}</h2>
      </div>
    </div>
  );
};

export default Movie;
