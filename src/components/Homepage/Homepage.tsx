import { useEffect, useState } from 'react';

import ArrowUpIcon from '../../images/arrowUp.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPopularMovies, searchMovies } from '../../store/moviesSlice';
import ButtonIcon from '../UI/Buttons/ButtonIcon/ButtonIcon';
import { HomepageWrapper } from './Homepage.styles';
import Movies from './Movies/Movies';
import Search from './Search/Search';

const SCROLL_HEIGHT = 300;

const Homepage = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const genres = useAppSelector((state) => state.movies.genres);

  useEffect(() => {
    if (!genres.length) return;

    if (search) {
      dispatch(searchMovies({ search, page }));
    } else {
      dispatch(getPopularMovies({ page }));
    }
  }, [page, search, genres, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', getScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', getScrollButtonVisibility);
    };
  }, []);

  const getScrollButtonVisibility = () =>
    window.pageYOffset > SCROLL_HEIGHT ? setShowScrollButton(true) : setShowScrollButton(false);

  const onScrollButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetPage = () => setPage(1);

  const saveSearch = (value: string) => setSearch(value);

  const onLastMovieVisible = () => setPage((prevPage) => prevPage + 1);

  return (
    <HomepageWrapper>
      <Search saveSearch={saveSearch} resetPage={resetPage} />
      <Movies onLastMovieVisible={onLastMovieVisible} />
      {showScrollButton && (
        <ButtonIcon
          icon={ArrowUpIcon}
          alt="Scroll to the top"
          fixed
          onClick={onScrollButtonClick}
        />
      )}
    </HomepageWrapper>
  );
};

export default Homepage;
