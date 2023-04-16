import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle";
import { PersonTile } from "../PersonTile";
import {
  fetchPeopleLoading,
  selectPopularPeople,
  selectPopularPeopleStatus,
  selectPopularPeopleTotalPages,
  selectTotalPeopleResults,
} from "../popularPeopleSlice";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { GridList } from "../../../common/GridList";
import { Main } from "../../../common/Main";
import { Pagination } from "../../../common/Pagination";
import { NoResult } from "../../../common/status/NoResult";
import useQueryParameter from "../../../useQueryParameter";

const PopularPeople = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);
  const stateOfLoading = useSelector(selectPopularPeopleStatus);
  const query = useQueryParameter("search");
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectPopularPeopleTotalPages);
  const totalResults = useSelector(selectTotalPeopleResults);

  useEffect(() => {
    dispatch(fetchPeopleLoading({ page,query }));
  }, [dispatch, page, query]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading content="Loading..." />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Main>
          {!people.length ? (
            <NoResult query={query} />
          ) : (
            <>
              <Container>
                <section>
                  <SectionTitle peopleList>
                    {query? `Search results for "${query}" (${totalResults})`
                    : "People list"}
                  </SectionTitle>
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
              <Pagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            </>
          )}
        </Main>
      )}
    </>
  );
};

export default PopularPeople;
