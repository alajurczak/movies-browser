import Header from "./common/Header";
import PopularMovies from "./features/movies/MovieList";
import { Main } from "./common/Main/styled";
import { Pagination } from "./common/Pagination";
import MoviePage from "./features/movies/MoviePage";
import ActorTile from "./features/people/ActorTile";

function App() {
  return (
    <>
      <Header />
      <MoviePage />
      <ActorTile />
      <Main>
        <PopularMovies />
        <Pagination />
      </Main>
    </>
  );
}

export default App;
