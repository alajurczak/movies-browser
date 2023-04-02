import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from './features/movies/popularMoviesSlice';
import genreReducer from './features/movies/MovieTile/Genre/genreSlice';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './rootSaga';
import popularPeopleReducer from "./features/people/popularPeopleSlice";
import personPageReducer from "./features/people/PersonPage/personPageSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        popularMovies: popularMoviesReducer,
        genres: genreReducer,
        popularPeople: popularPeopleReducer,
        personPage: personPageReducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);

export default store;