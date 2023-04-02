import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonDataLoading, selectPersonData } from "./personSlice";
import {
  StyledActorTile,
  ActorImage,
  ActorName,
} from "./styled";
import { imagesBaseUrl } from "../../../ApiPaths";

const ActorTile = () => {
  const person = useSelector(selectPersonData);
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchPersonDataLoading());
  }, [dispatch]);

  return (
    <StyledActorTile>
      <ActorImage
        loaded={imageLoaded}
        src={
          person.profile_path
            ? `${imagesBaseUrl}/w342${
                person.profileSizes ? person.profileSizes[1] : ""
              }${person.profile_path}`
            : person.noProfile
        }
        alt=""
        onLoad={() => setImageLoaded(true)}
      />
      <ActorName>{person.name}</ActorName>
    </StyledActorTile>
  );
};

export default ActorTile;
