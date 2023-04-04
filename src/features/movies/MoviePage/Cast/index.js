import { useSelector } from "react-redux";
import { selectMovieCast } from "../movieSlice";
import { SectionTitle } from "../../../../common/SectionTitle";
import { PersonTile } from "../../../people/PersonTile";
import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";
import { StyledLink } from "../../../people/PeopleList/styled";

export const Cast = () => {
  const cast = useSelector(selectMovieCast);

  return (
    <Container>
      <section>
        <SectionTitle>Cast</SectionTitle>
        {cast && cast.length > 0 && (
          <GridList popularPeople>
            {cast.map(({ profile_path, id, name, cast_id, character }) => (
              <StyledLink to={`/profile/${id}`}>
                <PersonTile
                  key={id}
                  id={cast_id}
                  profile_path={profile_path}
                  name={name}
                  character={character}
                />
              </StyledLink>
            ))}
          </GridList>
        )}
      </section>
    </Container>
  );
};
