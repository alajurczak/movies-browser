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
    fetchMovieDetailsSuccess: (
      _,
      { payload: { movie, movieCast, movieCrew } }
    ) => ({
      status: "success",
      movie: movie,
      movieCast: movieCast,
      movieCrew: movieCrew,
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
export const selectMovie = (state) =>
  selectMovieDetailsAndCreditsState(state).movie;
export const selectMovieCast = (state) =>
  selectMovieDetailsAndCreditsState(state).movieCast;
export const selectMovieCrew = (state) =>
  selectMovieDetailsAndCreditsState(state).movieCrew;

export default movieDetailsAndCreditsSlice.reducer;
