import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle";
import { PersonTile } from "../PersonTile";
import {
  fetchPeopleLoading,
  selectPopularPeople,
  selectPopularPeopleStatus,
} from "../popularPeopleSlice";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { GridList } from "../../../common/GridList";
import { Main } from "../../../common/Main";

const PopularPeople = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);
  const stateOfLoading = useSelector(selectPopularPeopleStatus);

  useEffect(() => {
    dispatch(fetchPeopleLoading());
  }, [dispatch]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Main>
          <Container>
            <section>
              <SectionTitle peopleList>Popular People</SectionTitle>
              {people && people.length > 0 && (
                <GridList popularPeople>
                  {people.map(({ profile_path, id, name }) => (
                    <li key={id}>
                      <PersonTile
                        id={id}
                        profile_path={profile_path}
                        name={name}
                      />
                    </li>
                  ))}
                </GridList>
              )}
            </section>
          </Container>
        </Main>
      )}
    </>
  );
};

export default PopularPeople;
