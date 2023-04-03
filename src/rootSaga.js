import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/MovieTile/popularMoviesSaga";
import { watchFetchGenres } from "./features/movies/MovieTile/Genre/genreSaga";
import { watchMovieDetailsAndCredits } from "./features/movies/MoviePage/movieSaga";
import { watchFetchPopularPeople } from "./features/people/popularPeopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchGenres(),
    watchMovieDetailsAndCredits(),
    watchFetchPopularPeople(),
  ]);
}
