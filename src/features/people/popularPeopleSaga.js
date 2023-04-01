import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchPeopleLoading,
    fetchPeopleError,
    fetchPeopleSuccess,
} from "./popularPeopleSlice";
import { getApi } from "../../getApi";
import { apiKey, baseUrl, language } from "../../ApiPaths";


function* fetchPopularPeopleHandler() {
    try {
        const people = yield call(
            getApi,
            `${baseUrl}/person/popular${apiKey}${language}`
        );
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        yield put(fetchPeopleError);
    }
}

export function* watchFetchPopularPeople() {
    yield takeLatest(fetchPeopleLoading.type, fetchPopularPeopleHandler);
}