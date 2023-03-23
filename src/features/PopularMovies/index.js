import { Container } from "../../common/Container";
import { MovieList } from "../../common/MovieList";
import { SectionTitle } from "../../common/SectionTitle";

const PopularMovies = () => {
  return (
    <Container>
      <section>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieList>
          <li></li>
        </MovieList>
      </section>
    </Container>
  );
};

export default PopularMovies;
