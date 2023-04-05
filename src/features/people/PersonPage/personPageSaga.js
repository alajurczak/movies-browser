import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiPaths";
import { getApi } from "../../../getApi";
import {
  fetchPersonPageError,
  fetchPersonPageLoading,
  fetchPersonPageSuccess,
} from "./personPageSlice";

function* fetchPersonPageHandler({ payload: id }) {
  const personPath = `${baseUrl}/person/${id}/movie_credits${apiKey}${language}`;
  const detailsPath = `${baseUrl}/person/${id}${apiKey}${language}`;
  try {
    yield delay(1000);
    const [person, details] = yield all([
      call(getApi, personPath),
      call(getApi, detailsPath),
    ]);
    yield put(fetchPersonPageSuccess({ person, details }));
    console.log({ person, details });
  } catch (error) {
    yield put(fetchPersonPageError());
  }
}

export function* watchFetchPersonPage() {
  yield takeLatest(fetchPersonPageLoading.type, fetchPersonPageHandler);
}
