import Header from "./common/Header";
import PopularMovies from "./features/movies/PopularMovies";
import { Main } from "./common/Main";
import { Pagination } from "./common/Pagination";

function App() {
  return (
    <>
      <Header />
      <Main>
        <PopularMovies />
      </Main>
      <Pagination />
    </>
  );
}

export default App;
