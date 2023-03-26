import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/popularMoviesSaga";
import { watchFetchGenres } from "./features/movies/MovieTile/Genre/genreSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPopularMovies(),
        watchFetchGenres(),
    ]);
};