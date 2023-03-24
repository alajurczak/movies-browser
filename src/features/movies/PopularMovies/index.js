import { Container } from "../../../common/Container";
import { MovieList } from "../../../common/MovieList";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieTile } from "../../../features/movies/MovieTile";

const PopularMovies = () => {
  return (
    <Container>
      <section>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieList>
          <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
                    <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
           <li>
            <MovieTile />
          </li>
        </MovieList>
      </section>
    </Container>
  );
};

export default PopularMovies;
