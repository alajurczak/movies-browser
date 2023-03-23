import Header from "./common/Header";
import PopularMovies from "./features/PopularMovies";
import { Main } from "./common/Main";

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
