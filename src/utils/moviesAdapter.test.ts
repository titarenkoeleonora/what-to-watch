import { IGenre, IMovie, InitialMovie } from '../types';
import { moviesAdapter } from './moviesAdapter';

describe('testAdapter', () => {
  it('should return ready to use array of tests', () => {
    const mockMovies: InitialMovie[] = [
      {
        adult: false,
        backdrop_path: '/pSOuqtJmdh7aI1yiK7M8e0PmbPC.jpg',
        genre_ids: [28, 14, 878],
        id: 436270,
        original_language: 'en',
        original_title: 'Black Adam',
        overview: 'Nearly 5,000 years...',
        popularity: 21272.277,
        poster_path: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
        release_date: '2022-10-19',
        title: 'Black Adam',
        video: false,
        vote_average: 7.1,
        vote_count: 1574,
      },
      {
        adult: false,
        backdrop_path: '/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg',
        genre_ids: [14, 28, 35, 80],
        id: 1013860,
        original_language: 'en',
        original_title: 'R.I.P.D. 2: Rise of the Damned',
        overview: 'When Sheriff Roy Pulsipher finds himself in the afterlife...',
        popularity: 3817.14,
        poster_path: '/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
        release_date: '2022-11-15',
        title: 'R.I.P.D. 2: Rise of the Damned',
        video: false,
        vote_average: 6.9,
        vote_count: 132,
      },
    ];

    const mockTestAdapterResults: IMovie[] = [
      {
        id: 436270,
        overview: 'Nearly 5,000 years...',
        title: 'Black Adam',
        poster: 'https://image.tmdb.org/t/p/w500/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/pSOuqtJmdh7aI1yiK7M8e0PmbPC.jpg',
        genres: ['Action', 'Fantasy', 'Science Fiction'],
        releaseDate: 'October 2022',
        rating: 7.1,
      },
      {
        id: 1013860,
        overview: 'When Sheriff Roy Pulsipher finds himself in the afterlife...',
        title: 'R.I.P.D. 2: Rise of the Damned',
        poster: 'https://image.tmdb.org/t/p/w500/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg',
        genres: ['Fantasy', 'Action', 'Comedy', 'Crime'],
        releaseDate: 'November 2022',
        rating: 6.9,
      },
    ];

    const genres: IGenre[] = [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 35,
        name: 'Comedy',
      },
      {
        id: 80,
        name: 'Crime',
      },
      {
        id: 99,
        name: 'Documentary',
      },
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 10751,
        name: 'Family',
      },
      {
        id: 14,
        name: 'Fantasy',
      },
      {
        id: 36,
        name: 'History',
      },
      {
        id: 27,
        name: 'Horror',
      },
      {
        id: 10402,
        name: 'Music',
      },
      {
        id: 9648,
        name: 'Mystery',
      },
      {
        id: 10749,
        name: 'Romance',
      },
      {
        id: 878,
        name: 'Science Fiction',
      },
      {
        id: 10770,
        name: 'TV Movie',
      },
      {
        id: 53,
        name: 'Thriller',
      },
      {
        id: 10752,
        name: 'War',
      },
      {
        id: 37,
        name: 'Western',
      },
    ];

    const adapterResults = mockMovies.map((movie: InitialMovie) => moviesAdapter(movie, genres));

    expect(adapterResults).toHaveLength(2);
    expect(adapterResults[0].overview).toEqual(mockTestAdapterResults[0].overview);
    expect(adapterResults).toEqual(mockTestAdapterResults);
  });
});
