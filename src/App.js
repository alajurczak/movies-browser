import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;