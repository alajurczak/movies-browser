import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BigTile } from "../../../common/BigTile";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieTile } from "../../movies/MovieTile";
import { ContentContainer, Wrapper } from "./styled";
import { StyledLink } from "../PeopleList/styled";
import {
  fetchPersonPageLoading,
  selectCast,
  selectCrew,
  selectPerson,
  selectPersonPageStatus,
} from "./personPageSlice";
import { fetchGenres } from "../../movies/MovieTile/Genre/genreSlice";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";

export const PersonPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const person = useSelector(selectPerson);
  const stateOfLoading = useSelector(selectPersonPageStatus);

  useEffect(() => {
    dispatch(fetchPersonPageLoading(id));
    dispatch(fetchGenres());
  }, [dispatch, id]);
  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loading />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Wrapper>
          {person.map(
            ({
              profile_path,
              name,
              birthday,
              place_of_birth,
              biography,
              id,
            }) => (
              <BigTile
                title={name}
                profile_path={profile_path}
                article={biography}
                place_of_birth={place_of_birth}
                birthday={birthday}
                key={id}
              />
            )
          )}

          {cast && cast.length > 0 && (
            <>
              <SectionTitle>
                Movies - cast {`(`}
                {cast.length}
                {`)`}
              </SectionTitle>
              <ContentContainer>
                {cast.map(
                  ({
                    poster_path,
                    id,
                    credit_id,
                    title,
                    character,
                    release_date,
                    vote_average,
                    vote_count,
                    genre_ids,
                  }) => (
                    <StyledLink to={`/movies/${id}`}>
                      <MovieTile
                        key={credit_id}
                        id={id}
                        title={title}
                        vote_average={vote_average}
                        vote_count={vote_count}
                        poster_path={poster_path}
                        genre_ids={genre_ids}
                        character={character}
                        year={release_date}
                      />
                    </StyledLink>
                  )
                )}
              </ContentContainer>
            </>
          )}

          {crew && crew.length > 0 && (
            <>
              <SectionTitle>
                Movies - crew {`(`}
                {crew.length}
                {`)`}
              </SectionTitle>
              <ContentContainer>
                {crew.map(
                  ({
                    job,
                    title,
                    vote_average,
                    vote_count,
                    release_date,
                    poster_path,
                    id,
                    credit_id,
                    genre_ids,
                  }) => (
                    <StyledLink to={`/movies/${id}`}>
                      <MovieTile
                        key={credit_id}
                        id={id}
                        title={title}
                        vote_average={vote_average}
                        vote_count={vote_count}
                        job={job}
                        year={release_date}
                        poster_path={poster_path}
                        genre_ids={genre_ids}
                      />
                    </StyledLink>
                  )
                )}
              </ContentContainer>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};
