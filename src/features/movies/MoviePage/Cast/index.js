import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectMovieCredits } from "../movieSlice";
import {
  selectPersonData,
  fetchPersonDataLoading,
} from "../../../people/ActorTile/personSlice";
import { GridList } from "../../../../common/GridList/";
import { SectionTitle } from "../../../../common/SectionTitle/styled";
import { ActorTile, ActorImage, ActorName, ActorRole } from "./styled";
import { imagesBaseUrl } from "../../../../ApiPaths";

const Cast = () => {
  const movieCast = useSelector(selectMovieCredits);
  const person = useSelector(selectPersonData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonDataLoading());
  }, [dispatch]);

  return (
    <section>
      <SectionTitle as="h2">Cast</SectionTitle>
      <GridList>
        <li key={movieCast.cast_id}>
          <ActorTile>
            <ActorImage
              src={
                person.profile_path
                  ? `${imagesBaseUrl}/w342${
                      person.profileSizes ? person.profileSizes[1] : ""
                    }${person.profile_path}`
                  : person.noProfile
              }
              alt=""
            />
            <ActorName>{movieCast.name}</ActorName>
            <ActorRole>{movieCast.role}</ActorRole>
          </ActorTile>
        </li>
      </GridList>
    </section>
  );
};

export default Cast;
