import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../../common/Container";
import { fetchMovieDetailsLoading } from "./movieSlice";
import About from "./About";
import Poster from "./Poster";
import Cast from "./Cast";
import Crew from "./Crew";
import { Main } from "../../../common/Main/styled";
// import { LoadingPage } from "../../../common/status/LoadingPage";
// import { NoResult } from "../../../common/status/NoResult";

const MoviePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetailsLoading());
  }, [dispatch]);

  return (
    <>
      <Poster />
      <Main moviePage>
        <Container>
          <About />
          <Cast />
          <Crew />
        </Container>
      </Main>
    </>
  );
};

export default MoviePage;
