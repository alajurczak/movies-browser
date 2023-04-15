import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    status: "loading",
    movies: [],
    totalPages: 0,
    query: "",
    totalResults: 0,
  },
  reducers: {
    fetchMoviesLoading: (state) => {
      state.status = "loading";
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success";
      state.movies = movies.results;
      state.totalPages = movies.total_pages;
      state.totalResults = movies.total_results;
    },
  },
});

export const { fetchMoviesLoading, fetchMoviesError, fetchMoviesSuccess } =
  popularMoviesSlice.actions;

const selectMoviesState = (state) => state.popularMovies;

export const selectStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectTotalResults = (state) => selectMoviesState(state).totalResults;

export default popularMoviesSlice.reducer;
