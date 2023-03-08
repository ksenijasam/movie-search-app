import React, { useState, useEffect, useCallback } from 'react';
import Movie from './Movie';

import classes from './MovieList.module.css';

const MovieList: React.FC<any> = (props) => {
  
  return (
    <div>
      <div className={classes['title-style']}>
        <h1>Movie List App</h1>
      </div>
      <div className={classes.container}>
        {props.movies.map((movie: any) => (
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
