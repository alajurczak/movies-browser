import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieList, StyledLink } from "./styled";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieTile } from "../MovieTile";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import {
  fetchMoviesLoading,
  selectMovies,
  selectStatus,
} from "../../../features/movies/MovieTile/popularMoviesSlice";
import { selectTotalPages } from "../../../features/movies/MovieTile/popularMoviesSlice";
import { fetchGenres } from "../MovieTile/Genre/genreSlice";
import { Main } from "../../../common/Main";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const stateOfLoading = useSelector(selectStatus);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchMoviesLoading(page));
    dispatch(fetchGenres());
  }, [dispatch, page]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Main>
          <Container>
            <section>
              <SectionTitle movieList>Popular Movies</SectionTitle>
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
                      <li key={id}>
                        <StyledLink to={`/movies/${id}`}>
                          <MovieTile
                            id={id}
                            title={title}
                            poster_path={poster_path}
                            vote_average={vote_average}
                            vote_count={vote_count}
                            release_date={release_date}
                            genre_ids={genre_ids}
                          />
                        </StyledLink>
                      </li>
                    )
                  )}
                </MovieList>
              )}
            </section>
          </Container>
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </Main>
      )}
    </>
  );
};

export default PopularMovies;
