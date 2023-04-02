import { call, put, takeLatest } from "redux-saga/effects";
import { getApi } from "../../../getApi";
import { baseUrl, apiKey, language } from "../../../ApiPaths";
import {
  fetchPersonDataSuccess,
  fetchPersonPhotoSuccess,
  fetchPersonDataLoading,
  fetchPersonDataError,
} from "./personSlice";

function* fetchPersonDataHandler() {
  try {
    const personData = yield call(
      getApi,
      `${baseUrl}person/287${apiKey}${language}`
    );
    const personPhoto = yield call(
      getApi,
      `${baseUrl}person/287/images${apiKey}${language}`
    );
    yield put(fetchPersonDataSuccess(personData));
    yield put(fetchPersonPhotoSuccess(personPhoto));
  } catch {
    yield put(fetchPersonDataError());
  }
}

export function* watchFetchPersonData() {
  yield takeLatest(fetchPersonDataLoading.type, fetchPersonDataHandler);
}
