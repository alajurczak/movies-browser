import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectMovieCast,
  fetchMovieDetailsLoading,
  selectMovieDetailsStatus,
} from "../movieSlice";
import { SectionTitle } from "../../../../common/SectionTitle/styled";
import { PersonTile } from "../../../people/PersonTile";
import { Loading } from "../../../../common/status/Loading";
import { Error } from "../../../../common/status/Error";
import { Container } from "../../../../common/Container";
import { PeopleList } from "../../../people/PeopleList/styled";
import { useParams } from "react-router-dom";

const Cast = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cast = useSelector(selectMovieCast);
  const stateOfLoading = useSelector(selectMovieDetailsStatus);

  useEffect(() => {
    dispatch(fetchMovieDetailsLoading(id));
  }, [dispatch, id]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Container>
          <section>
            <SectionTitle>Cast</SectionTitle>
            {cast && cast.length > 0 && (
              <PeopleList>
                {cast.map(({ profile_path, id, name }) => (
                  <PersonTile
                    key={id}
                    id={id}
                    profile_path={profile_path}
                    name={name}
                  />
                ))}
              </PeopleList>
            )}
          </section>
        </Container>
      )}
    </>
  );
};

export default Cast;
