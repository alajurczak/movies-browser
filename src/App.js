import Header from "./common/Header";
import PopularMovies from "./features/movies/MovieList";
import { Main } from "./common/Main/styled";
import { Pagination } from "./common/Pagination";

function App() {
  return (
    <>
      <Header />
      <Main>
        <PopularMovies />
        <Pagination />
      </Main>
    </>
  );
}

export default App;
