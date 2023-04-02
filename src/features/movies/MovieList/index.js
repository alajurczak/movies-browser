import { Container } from "../../../common/Container";
import { MovieList } from "./styled";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { MovieTile } from "../MovieTile";
import { Pagination } from "../../../common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesLoading, selectMovies } from "../popularMoviesSlice";
import { fetchGenres } from "../MovieTile/Genre/genreSlice";
import { useEffect } from "react";

const PopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesLoading());
    dispatch(fetchGenres());
  }, [dispatch]);

  const movies = useSelector(selectMovies);

  return (
    <Container>
      <section>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieList>
          {movies.map(
            ({
              id,
              title,
              poster_path,
              vote_average,
              vote_count,
              release_date,
              genre_ids,
            }) => (
              <MovieTile
                key={id}
                title={title}
                poster_path={poster_path}
                rating={vote_average}
                votes={vote_count}
                release_date={release_date}
                genre_ids={genre_ids}
              />
            )
          )}
        </MovieList>
      </section>
      <Pagination />
    </Container>
  );
};

export default PopularMovies;
