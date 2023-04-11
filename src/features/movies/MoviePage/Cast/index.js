import { useSelector } from "react-redux";
import { selectMovieCast } from "../movieSlice";
import { SectionTitle } from "../../../../common/SectionTitle";
import { PersonTile } from "../../../people/PersonTile";
import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";

export const Cast = () => {
  const cast = useSelector(selectMovieCast);

  return (
    <Container>
      <section>
        <SectionTitle>Cast</SectionTitle>
        {cast && cast.length > 0 && (
          <GridList popularPeople>
            {cast.map(({ profile_path, id, name, cast_id, character }) => (
              <li key={cast_id}>
                <PersonTile
                  id={id}
                  profile_path={profile_path}
                  name={name}
                  character={character}
                />
              </li>
            ))}
          </GridList>
        )}
      </section>
    </Container>
  );
};
