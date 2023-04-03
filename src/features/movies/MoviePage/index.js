import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import { fetchMovieDetailsLoading } from "./movieSlice";
import About from "./About";
import Poster from "./Poster";
import Cast from "./Cast";
import Crew from "./Crew";
import { Main } from "../../../common/Main/styled";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(fetchMovieDetailsLoading(id));
  }, [dispatch, id]);

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
