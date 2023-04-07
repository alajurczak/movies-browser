import { createSlice } from "@reduxjs/toolkit";

const movieDetailsAndCreditsSlice = createSlice({
  name: "movieDetailsAndCredits",
  initialState: {
    status: "loading",
    movie: [],
    cast: [],
    crew: [],
  },
  reducers: {
    fetchMovieDetailsLoading: () => ({
      status: "loading",
      movie: [],
      cast: [],
      crew: [],
    }),
    fetchMovieDetailsError: () => ({
      status: "error",
      movie: [],
      cast: [],
      crew: [],
    }),
    fetchMovieDetailsSuccess: (_, { payload: { movie, movieCredits } }) => ({
      status: "success",
      movie: movie,
      cast: movieCredits.cast,
      crew: movieCredits.crew,
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

export const selectMovieDetailsAndCreditsStatus = (state) =>
  selectMovieDetailsAndCreditsState(state).status;
export const selectMovie = (state) =>
  selectMovieDetailsAndCreditsState(state).movie;
export const selectMovieCast = (state) =>
  selectMovieDetailsAndCreditsState(state).cast;
export const selectMovieCrew = (state) =>
  selectMovieDetailsAndCreditsState(state).crew;

export default movieDetailsAndCreditsSlice.reducer;
