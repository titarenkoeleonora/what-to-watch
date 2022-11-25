import moment from 'moment';

import { IGenre, InitialMovie } from '../types';
import { IMAGES_BASE_URL } from './constants';

const DATE_FORMAT = 'MMMM YYYY';

const getGenreNames = (ids: number[], genres: IGenre[]): string[] => {
  const genreNames = ids?.reduce((accumulator: string[], currentId) => {
    const name = genres?.find((genre: IGenre) => genre.id === currentId)?.name ?? '';

    return [...accumulator, name];
  }, []);

  return genreNames;
};

const getReleaseDate = (date: string) => moment(date).format(DATE_FORMAT);

const reduceMovieDetailedGenres = (genres?: IGenre[]): string[] => {
  if (genres?.length) {
    return genres?.reduce((acc: string[], item: IGenre) => {
      return [...acc, item.name];
    }, []);
  } else {
    return [];
  }
};

export const moviesAdapter = (movie: InitialMovie, genres: IGenre[]) => ({
  id: movie.id,
  overview: movie.overview,
  title: movie.title,
  poster: movie.poster_path ? `${IMAGES_BASE_URL}/w500${movie.poster_path}` : '',
  backdrop: movie.backdrop_path ? `${IMAGES_BASE_URL}/original${movie.backdrop_path}` : '',
  genres: movie.genre_ids
    ? getGenreNames(movie.genre_ids, genres)
    : reduceMovieDetailedGenres(movie.genres),
  releaseDate: movie.release_date ? getReleaseDate(movie.release_date) : '',
  rating: movie.vote_average,
});
