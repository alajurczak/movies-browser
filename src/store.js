import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from './features/movies/popularMoviesSlice';
import genreReducer from './features/movies/MovieTile/Genre/genreSlice';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './rootSaga';
import popularPeopleReducer from "./features/people/popularPeopleSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        genres: genreReducer,
        popularPeople: popularPeopleReducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);

export default store;