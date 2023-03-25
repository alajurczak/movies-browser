import { createSlice } from '@reduxjs/toolkit';

const genreSlice = createSlice({
    name: "genres",
    initialState: {
        genre: [],
    },
    reducers: {
        fetchGenres: () => ({ genre: [] }),
        fetchGenresError: () => ({ genre: [] }),
        fetchGenreSuccess: (state, { payload: genresApi }) => {
            state.genresApi = genresApi.genres;
        },
    }
});

export const {
    fetchGenres,
    fetchGenresError,
    fetchGenreSuccess
} = genreSlice.actions;

const selectGenresState = state => state.genres;

export const selectGenre = state =>selectGenresState(state).genre;

export default genreSlice.reducer;