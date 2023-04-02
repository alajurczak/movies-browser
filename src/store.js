import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "./features/movies/MovieTile/popularMoviesSlice";
import genreReducer from "./features/movies/MovieTile/Genre/genreSlice";
import personDataReducer from "./features/people/ActorTile/personSlice";
import movieDetailsAndCreditsReducer from "./features/movies/MoviePage/movieSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    genres: genreReducer,
    personData: personDataReducer,
    movieDetailsAndCredits: movieDetailsAndCreditsReducer,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(rootSaga);

export default store;
