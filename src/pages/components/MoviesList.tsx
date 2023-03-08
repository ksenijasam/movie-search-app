

import Movie from './Movie';

import classes from './MovieList.module.css';

import React, { useState, useEffect, useCallback } from 'react';

// interface MoviesObject{
//   title: string;
//   moviePoster: string,
//   year: string,
//   plot: string,
//   genre: string
// };

function openModal() {
  alert(2);
}


const MovieList: React.FC<any> = (props) => {
  
  return (
    <div>
      <div className={classes['title-style']}>
        <h1>Movie List App</h1>
      </div>
      <div className={classes['title-style']}>
        {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/> */}
      </div>
      <div className={classes['container']} onClick={openModal}>
        {props.movies.map((movie: any) => (
          <div className={classes['item-style']}>
            <Movie
              key={movie.id}
              title={movie.title}
              moviePoster='{movie.moviePoster}'
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
