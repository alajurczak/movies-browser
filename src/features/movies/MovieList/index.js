import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieList, StyledLink } from "./styled";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { MovieTile } from "../MovieTile";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import {
  fetchMoviesLoading,
  selectMovies,
  selectStatus,
} from "../../../features/movies/MovieTile/popularMoviesSlice";
import { fetchGenres } from "../MovieTile/Genre/genreSlice";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const stateOfLoading = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMoviesLoading());
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Container>
          <section>
            <SectionTitle>Popular Movies</SectionTitle>
            {movies && movies.length > 0 && (
              <MovieList>
                {movies.map(
                  ({
                    id,
                    title,
                    poster_path,
                    vote_count,
                    vote_average,
                    release_date,
                    genre_ids,
                  }) => (
                    <StyledLink to={`/movie/${id}/movieDetails`}>
                      <MovieTile
                        key={id}
                        id={id}
                        title={title}
                        poster_path={poster_path}
                        vote_average={vote_average}
                        vote_count={vote_count}
                        release_date={release_date}
                        genre_ids={genre_ids}
                      />
                    </StyledLink>
                  )
                )}
              </MovieList>
            )}
          </section>
        </Container>
      )}
      <Pagination />
    </>
  );
};

export default PopularMovies;
