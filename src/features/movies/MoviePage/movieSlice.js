import { createSlice } from "@reduxjs/toolkit";

const movieDetailsAndCreditsSlice = createSlice({
  name: "movieDetailsAndCredits",
  initialState: {
    status: "loading",
    movie: [],
    movieCast: [],
    movieCrew: [],
  },
  reducers: {
    fetchMovieDetailsLoading: () => ({
      status: "loading",
      movie: [],
      movieCast: [],
      movieCrew: [],
    }),
    fetchMovieDetailsError: () => ({
      status: "error",
      movie: [],
      movieCast: [],
      movieCrew: [],
    }),
    fetchMovieDetailsSuccess: (_, { payload: { movie, movieDetails } }) => ({
      status: "success",
      movie: [movieDetails],
      movieCast: movie.movieCredits,
      movieCrew: movie.movieCredits,
    }),
  },
});

export const {
  fetchMovieDetailsLoading,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsAndCreditsSlice.actions;

const selectMovieDetailsAndCreditsState = (state) =>
  state.movieDetailsAndCredits;

export const selectMovieDetailsStatus = (state) =>
  selectMovieDetailsAndCreditsState(state).status;
export const selectMovieDetails = (state) =>
  selectMovieDetailsAndCreditsState(state).movie;
export const selectMovieCast = (state) =>
  selectMovieDetailsAndCreditsState(state).movieCast;
export const selectMovieCrew = (state) =>
  selectMovieDetailsAndCreditsState(state).movieCrew;

export default movieDetailsAndCreditsSlice.reducer;
