import React from 'react';

interface movieDetails{
  title: string;
  moviePoster: string,
  year: string,
  plot: string,
  genre: string
}

const Movie: React.FC<movieDetails> = (props:movieDetails) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.moviePoster} alt="Movie Poster"></img>
      <h2>{props.year}</h2>
      <h2>{props.plot}</h2>
      <h2>{props.genre}</h2>
    </div>
  );
};

export default Movie;
