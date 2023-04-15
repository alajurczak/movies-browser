import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMoviesLoading,
} from "./popularMoviesSlice";
import { getApi } from "../../../getApi";
import { baseUrl, apiKey, language } from "../../../ApiPaths";

function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield delay(1000);
    const popularMovies = yield call(
      getApi,
      `${baseUrl}/movie/popular${apiKey}${language}&page=${page}`
    );
    yield put(fetchMoviesSuccess(popularMovies));
  } catch {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMoviesLoading.type, fetchPopularMoviesHandler);
}
