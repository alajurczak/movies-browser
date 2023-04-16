import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieList, StyledLink } from "./styled";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieTile } from "../MovieTile";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { NoResult } from "../../../common/status/NoResult";
import {
  fetchMoviesLoading,
  selectMovies,
  selectStatus,
  selectTotalResults,
} from "../../../features/movies/MovieTile/popularMoviesSlice";
import { selectTotalPages } from "../../../features/movies/MovieTile/popularMoviesSlice";
import { fetchGenres } from "../MovieTile/Genre/genreSlice";
import { Main } from "../../../common/Main";
import useQueryParameter, { searchQueryParamName } from "../../../useQueryParameter";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const stateOfLoading = useSelector(selectStatus);
  const query = useQueryParameter(searchQueryParamName);
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);

  useEffect(() => {
    dispatch(fetchMoviesLoading({ page, query }));
    dispatch(fetchGenres());
  }, [dispatch, page, query]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Main>
          {!movies.length ? (
            <NoResult query={query} />
          ) : (
            <>
              <Container>
                <section>
                  <SectionTitle movieList>
                    {query
                      ? `Search results for "${query}" (${totalResults})`
                      : "Popular movies"}
                  </SectionTitle>
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
              <Pagination
                totalPages={totalPages}
                page={page}
                setPage={setPage} />
            </>
          )}
        </Main>
      )}
    </>
  );
};

export default PopularMovies;
