import MovieList from './components/MoviesList'

import React, { useState, useEffect, useCallback } from 'react';

function MovieApi() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const movies = data.results.map((movieData: any) => {
        return {
          id: movieData.id,
          title: movieData.title,
          moviePoster: 'https://www.themoviedb.org/t/p/original' + movieData.poster_path,
          year: movieData.release_date.substring(0, 4),
          plot: movieData.overview,
          genre: movieData.genre_ids
        };
      });

      setMovies(movies);
    } catch (error) {
      throw new Error("Can't return movies.");
    }
  }, []);

  const [searchValue, setSearchValue] = useState('');

  //Fetch of filtered movies based on value that is passed as argument, and that is value of input search field
  const fetchMoviesFilter = useCallback(async (searchValue: string) => {
    setError(null);
    try {
      const requestOptions = {
        method: 'FETCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nameFilter: searchValue })
      };

      const response = await fetch('data.json', requestOptions);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const filteredMovies = data.results.map((filteredMovieData: any) => {
        return {
          id: filteredMovieData.id,
          title: filteredMovieData.title,
          moviePoster: 'https://www.themoviedb.org/t/p/original' + filteredMovieData.poster_path,
          year: filteredMovieData.release_date.substring(0, 4),
          plot: filteredMovieData.overview,
          genre: filteredMovieData.genre_ids
        };
      });

      setMovies(filteredMovies);
    } catch (error) {
      throw new Error("Can't filter movies.");
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  let content;

  //added setSearchValue(name); fetchMoviesFilter(name) in case we want to be able to pass search text 
  //from MovieList component and pass it to Fetch filter function as parameter
  if (movies.length > 0) {
    content = <MovieList movies={movies} onChange={(name:string)=> {setSearchValue(name); fetchMoviesFilter(name)}}/>;
  }

  return (
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  )
}

export default MovieApi;

