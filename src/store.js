import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "./features/movies/MovieTile/popularMoviesSlice";
import genreReducer from "./features/movies/MovieTile/Genre/genreSlice";
import movieDetailsAndCreditsReducer from "./features/movies/MoviePage/movieSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import popularPeopleReducer from "./features/people/popularPeopleSlice";
import personPageReducer from "./features/people/PersonPage/personPageSlice";
import searchReducer from "./features/Search/searchSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    genres: genreReducer,
    movieDetailsAndCredits: movieDetailsAndCreditsReducer,
    popularPeople: popularPeopleReducer,
    personPage: personPageReducer,
    search: searchReducer,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);

export default store;
