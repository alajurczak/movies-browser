import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import {
  selectMovieDetailsAndCreditsStatus,
  fetchMovieDetailsLoading,
} from "./movieSlice";
import { About } from "./About";
import { BackgroundPoster } from "./Poster";
import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { Main } from "../../../common/Main";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stateOfLoading = useSelector(selectMovieDetailsAndCreditsStatus);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    dispatch(fetchMovieDetailsLoading(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (query) {
      navigate(`/movies?${"search"}=${query}`);
    }
  }, [query, navigate]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <>
          <BackgroundPoster />
          <Main moviePage>
            <Container>
              <About />
              <Cast />
              <Crew />
            </Container>
          </Main>
        </>
      )}
    </>
  );
};
