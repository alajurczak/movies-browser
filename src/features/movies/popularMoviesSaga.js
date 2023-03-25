import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMoviesError, fetchMoviesLoading } from "./popularMoviesSlice";
import { getApi } from '../../getApi';

function* fetchPopularMoviesHandler() {
    try {
        const popularMovies = yield call(getApi);
        yield put(fetchMoviesSuccess(popularMovies));
    }
    catch {
        yield put(fetchMoviesError());
    }
};

export function* popularMoviesSaga() {
    yield takeLatest(fetchMoviesLoading.type, fetchPopularMoviesHandler);
}
