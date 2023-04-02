import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMovieDetailsSuccess,
  fetchMovieCreditsSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsLoading,
} from "./movieSlice";
import { getApi } from "../../../getApi";
import { baseUrl, apiKey, language } from "../../../ApiPaths";

function* fetchMovieDetailsAndCreditsHandler() {
  try {
    const movieDetails = yield call(
      getApi,
      `${baseUrl}movie/550${apiKey}${language}`
    );
    const movieCredits = yield call(
      getApi,
      `${baseUrl}movie/550/credits${apiKey}${language}`
    );
    yield put(fetchMovieDetailsSuccess(movieDetails));
    yield put(fetchMovieCreditsSuccess(movieCredits));
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
