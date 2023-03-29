import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import PopularMovies from "./features/movies/MovieList";
import { Error } from "./common/status/Error";
import { Main } from "./common/Main/styled";

function App() {

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/movies" element={<PopularMovies />} />
          <Route path="/people" element={<Error />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;