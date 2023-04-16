import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  fetchPeopleLoading,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./popularPeopleSlice";
import { getApi } from "../../getApi";
import { apiKey, baseUrl, language } from "../../ApiPaths";

function* fetchPopularPeopleHandler({ payload: { page, query } }) {
  const path =
    query === null
      ? `${baseUrl}/person/popular${apiKey}${language}&page=${page}`
      : `${baseUrl}/search/person${apiKey}${language}&query=${query}&page=${page}`;
  try {
    yield delay(1000);
    const people = yield call(
      getApi, path );
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPeopleLoading.type, fetchPopularPeopleHandler);
}
