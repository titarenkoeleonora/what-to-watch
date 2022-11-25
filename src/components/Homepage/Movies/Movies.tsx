import { FC, useRef } from 'react';

import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useAppSelector } from '../../../store/hooks';
import Loader from '../../UI/Loader/Loader';
import Movie from './Movie/Movie';
import { MoviesList, Observer } from './Movies.styles';

export interface MoviesProps {
  onLastMovieVisible(): void;
}

const Movies: FC<MoviesProps> = ({ onLastMovieVisible }) => {
  const movies = useAppSelector((state) => state.movies.movies);
  const searchedMovies = useAppSelector((state) => state.movies.searchedMovies);
  const isMoviesLoading = useAppSelector((state) => state.movies.isMoviesLoading);
  const isHaveNextPage = useAppSelector((state) => state.movies.isHaveNextPage);

  const lastMovieRef = useRef(null);

  useIntersectionObserver({
    enable: isHaveNextPage,
    isLoading: isMoviesLoading,
    target: lastMovieRef,
    onIntersect: () => onLastMovieVisible(),
  });

  const renderedMovies = searchedMovies.length ? searchedMovies : movies;

  const observerText = isHaveNextPage ? 'Load next' : 'You saw all movies';

  if (!renderedMovies.length && !isMoviesLoading) return <p>We don&apos;t have any movies</p>;

  return (
    <>
      <MoviesList>
        {renderedMovies.map((movie) => (
          <Movie key={`${movie.title}_${movie.id}`} movie={movie} />
        ))}
      </MoviesList>

      {isMoviesLoading ? <Loader /> : <Observer ref={lastMovieRef}>{observerText}</Observer>}
    </>
  );
};

export default Movies;
