import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieSlice";
import { SectionTitle } from "../../../../common/SectionTitle";
import { PersonTile } from "../../../people/PersonTile";
import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";
import { StyledLink } from "../../../people/PeopleList/styled";

export const Crew = () => {
  const cast = useSelector(selectMovieCrew);

  return (
    <Container>
      <section>
        <SectionTitle>Cast</SectionTitle>
        {cast && cast.length > 0 && (
          <GridList popularPeople>
            {cast.map(({ profile_path, id, name, credit_id, job }) => (
              <li key={credit_id}>
                <StyledLink to={`/people/${id}`}>
                  <PersonTile
                    id={credit_id}
                    profile_path={profile_path}
                    name={name}
                    job={job}
                  />
                </StyledLink>
              </li>
            ))}
          </GridList>
        )}
      </section>
    </Container>
  );
};
