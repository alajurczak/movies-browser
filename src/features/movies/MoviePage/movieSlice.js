import { createSlice } from "@reduxjs/toolkit";

const movieDetailsAndCreditsSlice = createSlice({
  name: "movieDetailsAndCredits",
  initialState: {
    status: "loading",
    movieDetails: [],
    movieCredits: [],
  },
  reducers: {
    fetchMovieDetailsLoading: (state) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
      state.status = "success";
      state.movieDetails = movieDetails;
    },
    fetchMovieCreditsSuccess: (state, { payload: movieCredits }) => {
      state.status = "success";
      state.movieCredits = movieCredits;
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchMovieDetailsLoading,
  fetchMovieDetailsSuccess,
  fetchMovieCreditsSuccess,
  fetchMovieDetailsError,
} = movieDetailsAndCreditsSlice.actions;

const selectMovieDetailsAndCreditsState = (state) =>
  state.movieDetailsAndCredits;

export const selectMovieDetailsStatus = (state) =>
  selectMovieDetailsAndCreditsState(state).status;
export const selectMovieDetails = (state) =>
  selectMovieDetailsAndCreditsState(state).movieDetails;
export const selectMovieCredits = (state) =>
  selectMovieDetailsAndCreditsState(state).movieCredits;

export default movieDetailsAndCreditsSlice.reducer;
