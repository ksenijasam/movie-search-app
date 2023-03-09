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

  let arrayCopy = props.movies.map((item: movieDetails) => ({...item})) 

  const [originalArray, setOriginalArray] = React.useState(arrayCopy);
  const [movies, setMovies] = React.useState(props.movies);

  const filterMovies = () => {
    let filteredMovies = movies.filter((x: { title: string; }) => x.title.toUpperCase().includes(searchText.toUpperCase()));
    setMovies(filteredMovies);

    if(filteredMovies.length < 1 || searchText === ''){ 
      setMovies(originalArray);
    }
  } 

  return (
    <div>
      <div className={classes['title-style']}>
        <h1>Movie List App</h1>
      </div>

      <div className={classes.input}>
        <input type="text" onChange={searchTextChangeHandler} ></input>
        <button type="button" onClick={filterMovies}> Search </button>
      </div>

      <div className={classes.container}>
        {movies.map((movie: movieDetails) => (
          <div className={classes.movie}>
            <Movie
              key={movie.id}
              title={movie.title}
              moviePoster={movie.moviePoster}
              year={movie.year}
              plot={movie.plot}
              genre={movie.genre} 
              closeModal={function (): {} {
                return {};
              }}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
