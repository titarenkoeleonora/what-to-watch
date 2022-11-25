import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Homepage from './components/Homepage/Homepage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useAppDispatch } from './store/hooks';
import { getGenres } from './store/moviesSlice';
import { GlobalStyles, theme } from './styles';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
