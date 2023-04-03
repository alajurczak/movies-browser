import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import {
  selectMovieDetailsStatus,
  fetchMovieDetailsLoading,
} from "./movieSlice";
import { About } from "./About";
import { BackgroundPoster } from "./Poster";
import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { Main } from "../../../common/Main/styled";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stateOfLoading = useSelector(selectMovieDetailsStatus);

  useEffect(() => {
    dispatch(fetchMovieDetailsLoading(id));
  }, [dispatch, id]);

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
              {/* <Crew /> */}
            </Container>
          </Main>
        </>
      )}
    </>
  );
};
