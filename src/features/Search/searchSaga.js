import { call, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../ApiPaths";
import {getApi} from "../../getApi";
import { fetchSearch, fetchSearchError, fetchSearchSuccess } from "./searchSlice";

function* fetchSearchQueryHandler({ payload: query }) {
    try {
        const movies = yield call(
            getApi,
            `${baseUrl}/search/movie${apiKey}${language}&query=${query}`
        );
        yield put(fetchSearchSuccess(movies));
    } catch (error) {
        yield put(fetchSearchError());
    }
}

export function* watchFetchSearchQuery() {
    yield takeLatest(fetchSearch.type, fetchSearchQueryHandler);
}