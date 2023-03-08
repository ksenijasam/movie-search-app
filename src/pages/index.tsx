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

      const filteredMovies = data.results.map((movieData:any) => {
        return {
          id: movieData.id,
          title: movieData.title,
          moviePoster: 'https://www.themoviedb.org/t/p/original' + movieData.poster_path,
          year: movieData.release_date.substring(0, 4),
          plot: movieData.overview,
          genre: movieData.genre_ids 
        };
      });

      setMovies(filteredMovies);
    } catch (error) {
      throw new Error("Can't return movies.");
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content:any = "Found no movies";

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  )

}

export default MovieApi;

