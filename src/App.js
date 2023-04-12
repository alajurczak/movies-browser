import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./common/Header";
import PopularMovies from "./features/movies/MovieList";
import PeopleList from "./features/people/PeopleList";
import { PersonPage } from "./features/people/PersonPage";
import { MoviePage } from "./features/movies/MoviePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<PopularMovies />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
