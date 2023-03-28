import Header from "./common/Header";
import PopularMovies from "./features/movies/MovieList";
import { Main } from "./common/Main/styled";

function App() {
  return (
    <>
      <Header />
      <Main>
        <PopularMovies />
      </Main>
    </>
  );
}

export default App;
