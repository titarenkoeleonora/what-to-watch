import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import NoImagePlaceholder from '../../../../images/noImagePlaceholder.png';
import { clearMovies } from '../../../../store/moviesSlice';
import { IMovie } from '../../../../types';
import { DetailsWrapper, MovieWrapper, Name, Poster, Rating, Text } from './Movie.styles';

interface MovieProps {
  movie: IMovie;
}

const Movie: FC<MovieProps> = ({ movie }) => {
  const dispatch = useDispatch();

  const { poster, genres, releaseDate, title, rating, id } = movie;

  const onCardClick = () => {
    dispatch(clearMovies());
  };

  return (
    <MovieWrapper>
      <Link onClick={onCardClick} to={`movie/${id}`} state={{ movie }}>
        <Poster src={poster || NoImagePlaceholder} />
        <DetailsWrapper>
          <Text>{releaseDate}</Text>
          <Rating>{rating}</Rating>
          <Name>{title}</Name>
          <Text>{genres.join(', ')}</Text>
        </DetailsWrapper>
      </Link>
    </MovieWrapper>
  );
};

export default Movie;
