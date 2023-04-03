import { call, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../../ApiPaths";
import { getApi } from "../../../../getApi";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./genreSlice";

function* fetchGenresHandler() {
  const genrePath = `${baseUrl}/genre/movie/list${apiKey}${language}`;
  try {
    const genres = yield call(getApi, genrePath);
    yield put(fetchGenresSuccess(genres));
    yield console.log(genres)
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
