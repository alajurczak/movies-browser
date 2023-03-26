import Header from "./Common/Header";
import PopularMovies from "./features/movies/MovieList";
import { Main } from "./Common/Main/styled";
import { Pagination } from "./Common/Pagination";

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
