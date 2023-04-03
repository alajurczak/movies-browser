import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsLoading,
} from "./movieSlice";
import { getApi } from "../../../getApi";
import { baseUrl, apiKey, language } from "../../../ApiPaths";

function* fetchMovieDetailsAndCreditsHandler({ payload: id }) {
  const moviePath = `${baseUrl}movie/${id}${apiKey}${language}`;
  const creditsPath = `${baseUrl}movie/${id}/credits${apiKey}${language}`;
  try {
    yield delay(1000);
    const [movie, movieDetails] = yield all([
      call(getApi, moviePath),
      call(getApi, creditsPath),
    ]);
    yield put(fetchMovieDetailsSuccess({ movie, movieDetails }));
    yield console.log({ movie, movieDetails });
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchMovieDetailsAndCredits() {
  yield takeLatest(
    fetchMovieDetailsLoading.type,
    fetchMovieDetailsAndCreditsHandler
  );
}
