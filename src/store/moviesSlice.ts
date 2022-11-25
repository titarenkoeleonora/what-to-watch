import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

import apiCLient from '../api/apiCLient';
import { IGenre, IMovie, InitialMovie } from '../types';
import { moviesAdapter } from '../utils/moviesAdapter';

interface MoviesState {
  movies: IMovie[];
  searchedMovies: IMovie[];
  genres: IGenre[];
  movie: IMovie;
  isMoviesLoading: boolean;
  isMovieDetailsLoading: boolean;
  isHaveNextPage: boolean;
}

const initialState: MoviesState = {
  movies: [],
  searchedMovies: [],
  genres: [],
  movie: {
    id: 0,
    overview: '',
    title: '',
    poster: '',
    backdrop: '',
    genres: [],
    releaseDate: '',
    rating: 0,
  },
  isMoviesLoading: false,
  isMovieDetailsLoading: false,
  isHaveNextPage: true,
};

export const getUpcomingMovies = createAsyncThunk(
  'movies/getMovies',
  async (data: { page: number }, thunkApi) => {
    const { page } = data;

    try {
      const response = await apiCLient.get(
        `/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=${page}`,
      );

      return response.data;
    } catch (error: any) {
      const message = error.message;

      return thunkApi.rejectWithValue(message);
    }
  },
);

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (data: { search: string; page?: number }, thunkApi) => {
    const { search, page } = data;

    try {
      const response = await apiCLient.get(
        `/search/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=${page}&query=${search}`,
      );

      return response.data;
    } catch (error: any) {
      const message = error.message;

      return thunkApi.rejectWithValue(message);
    }
  },
);

export const getGenres = createAsyncThunk('movies/getGenres', async (data, thunkApi) => {
  try {
    const response = await apiCLient.get(
      `/genre/movie/list?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US`,
    );

    return response.data;
  } catch (error: any) {
    const message = error.message;

    return thunkApi.rejectWithValue(message);
  }
});

export const getMovieDetails = createAsyncThunk(
  'movies/getMovieDetails',
  async (id: string | undefined, thunkApi) => {
    try {
      const response = await apiCLient.get(
        `/movie/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US`,
      );

      return response.data;
    } catch (error: any) {
      const message = error.message;

      return thunkApi.rejectWithValue(message);
    }
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMovies(state) {
      state.searchedMovies = initialState.searchedMovies;
      state.movies = initialState.movies;
    },
    clearMovieDetails(state) {
      state.movie = initialState.movie;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUpcomingMovies.fulfilled, (state: MoviesState, action) => {
      const { results, page, total_pages } = action.payload;

      const adaptedMovies = results.map((movie: InitialMovie) =>
        moviesAdapter(movie, current(state.genres)),
      );

      state.movies = Array.from(new Set([...state.movies, ...adaptedMovies]));
      state.isMoviesLoading = false;
      state.isHaveNextPage = page < total_pages;
    });

    builder.addCase(getUpcomingMovies.pending, (state: MoviesState) => {
      state.isMoviesLoading = true;
    });

    builder.addCase(searchMovies.fulfilled, (state: MoviesState, action) => {
      const { results, page, total_pages } = action.payload;

      const adaptedMovies = results.map((movie: InitialMovie) =>
        moviesAdapter(movie, current(state.genres)),
      );

      state.searchedMovies = Array.from(new Set([...state.movies, ...adaptedMovies]));
      state.isMoviesLoading = false;
      state.isHaveNextPage = page < total_pages;
    });

    builder.addCase(searchMovies.pending, (state: MoviesState) => {
      state.isMoviesLoading = true;
    });

    builder.addCase(getGenres.fulfilled, (state: MoviesState, action) => {
      state.genres = action.payload.genres;
    });

    builder.addCase(getMovieDetails.fulfilled, (state: MoviesState, action) => {
      const { payload } = action;

      const adaptedMovie = moviesAdapter(payload, current(state.genres));
      state.movie = adaptedMovie;
      state.isMovieDetailsLoading = false;
    });

    builder.addCase(getMovieDetails.pending, (state: MoviesState) => {
      state.isMovieDetailsLoading = true;
    });
  },
});

export const { clearMovies, clearMovieDetails } = moviesSlice.actions;
export default moviesSlice.reducer;
