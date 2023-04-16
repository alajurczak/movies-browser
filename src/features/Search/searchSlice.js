import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: "loading",
        query: "",
        totalResults: 0,
    },
    reducers: {
        fetchSearch: () => ({}),
        fetchSearchSuccess: (state, { payload: search }) => ({
            status: "succes",
            movies: search.results,
            totalResults: search.total_results,
        }),
        fetchSearchError: () => ({
            status: "error",
            movies: [],
            totalResults: 0,
        }),
    },
});

export const {
    fetchSearch,
    fetchSearchSuccess,
    fetchSearchError } =
    searchSlice.actions;

export const selectSearchState = (state) => state.search;

export const selectSearchMovies = (state) => selectSearchState(state).movies;
export const selectSearchStatus = (state) => selectSearchState(state).status;
export const selectSearchTotalResults = (state) => selectSearchState(state).totalResults;

export default searchSlice.reducer;