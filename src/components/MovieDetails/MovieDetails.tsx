import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackIcon from '../../images/arrowLeft.svg';
import NoImagePlaceholder from '../../images/noImagePlaceholder.png';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearMovieDetails, getMovieDetails } from '../../store/moviesSlice';
import ButtonIcon from '../UI/Buttons/ButtonIcon/ButtonIcon';
import Loader from '../UI/Loader/Loader';
import {
  AdditionalInfoWrapper,
  DetailsWrapper,
  Genres,
  InfoWrapper,
  MovieDetailsWrapper,
  Name,
  Overview,
  Poster,
  Rating,
  ReleaseDate,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { movieId } = useParams();

  const movie = useAppSelector((state) => state.movies.movie);
  const isMovieDetailsLoading = useAppSelector((state) => state.movies.isMovieDetailsLoading);

  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [movieId, dispatch]);
  const { poster, genres, releaseDate, title, rating, backdrop, overview } = movie;

  const onBackButtonClick = () => {
    navigate('/');

    dispatch(clearMovieDetails());
  };

  return (
    <MovieDetailsWrapper backgroundImage={backdrop}>
      <ButtonIcon
        icon={ArrowBackIcon}
        alt="Return to the movies list"
        onClick={onBackButtonClick}
      />
      {isMovieDetailsLoading ? (
        <Loader />
      ) : (
        <DetailsWrapper>
          <Poster src={poster || NoImagePlaceholder} />
          <InfoWrapper>
            <Name>{title}</Name>
            <AdditionalInfoWrapper>
              {releaseDate && <ReleaseDate>{releaseDate}</ReleaseDate>}
              {rating && <Rating>Rating: {rating}</Rating>}
            </AdditionalInfoWrapper>
            <Overview>{overview}</Overview>
            {genres.length > 0 && <Genres>Genres: {genres?.join(', ')}</Genres>}
          </InfoWrapper>
        </DetailsWrapper>
      )}
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;
