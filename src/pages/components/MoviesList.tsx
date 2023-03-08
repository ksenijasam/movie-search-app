import React, { useState } from 'react';
import Movie from './Movie';

import classes from './MovieList.module.css';

interface movieDetails {
  id: string,
  title: string;
  moviePoster: string,
  year: string,
  plot: string,
  genre: string
}

const MovieList: React.FC<any> = (props) => {

  const [searchText, setSearchText] = useState('');

  const searchTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <div className={classes['title-style']}>
        <h1>Movie List App</h1>
      </div>

      <div className={classes.input}>
        <input type="text" onChange={searchTextChangeHandler} ></input>
        <button type="button" onClick={() => props.onChange(searchText)}> Search </button>
      </div>

      <div className={classes.container}>
        {props.movies.map((movie: movieDetails) => (
          <div className={classes.movie}>
            <Movie
              key={movie.id}
              title={movie.title}
              moviePoster={movie.moviePoster}
              year={movie.year}
              plot={movie.plot}
              genre={movie.genre}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
