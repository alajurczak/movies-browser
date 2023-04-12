import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieSlice";
import { SectionTitle } from "../../../../common/SectionTitle";
import { PersonTile } from "../../../people/PersonTile";
import { Container } from "../../../../common/Container";
import { GridList } from "../../../../common/GridList";

export const Crew = () => {
  const crew = useSelector(selectMovieCrew);

  return (
    <Container>
      <section>
        <SectionTitle detailsPage>Crew</SectionTitle>
        {crew && crew.length > 0 && (
          <GridList popularPeople>
            {crew.map(({ profile_path, id, name, credit_id, job }) => (
              <li key={credit_id}>
                <PersonTile
                  id={id}
                  profile_path={profile_path}
                  name={name}
                  job={job}
                />
              </li>
            ))}
          </GridList>
        )}
      </section>
    </Container>
  );
};
