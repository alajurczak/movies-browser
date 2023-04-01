import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/popularMoviesSaga";
import { watchFetchGenres } from "./features/movies/MovieTile/Genre/genreSaga";
import { watchFetchPopularPeople } from "./features/people/popularPeopleSaga";

export default function* rootSaga() {
    yield all([
        watchFetchPopularMovies(),
        watchFetchGenres(),
        watchFetchPopularPeople(),
    ]);
};