import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./common/Header";
import PopularMovies from "./features/movies/MovieList";
import { Main } from "./common/Main/styled";
import PeopleList from "./features/people/PeopleList";
import { PersonPage } from "./features/people/PersonPage";
import { MoviePage } from "./features/movies/MoviePage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/movies" element={<PopularMovies />} />
          <Route path="/people" element={<PeopleList />} />
          <Route path="/profile/:id" element={<PersonPage />} />
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
