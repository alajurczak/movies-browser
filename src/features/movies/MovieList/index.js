import { Container } from "../../../common/Container";
import { MovieList } from "./styled";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { MovieTile } from "../MovieTile";
import { Pagination } from "../../../common/Pagination";

const PopularMovies = () => {
  return (
    <Container>
      <section>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieList>
          <MovieTile />
        </MovieList>
      </section>
      <Pagination/>
    </Container>
  );
};

export default PopularMovies;
