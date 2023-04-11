import { ProfileImage, Wrapper, Name, Character } from "./styled";
import noPicture from "./images/Picture.png";
import { imagesBaseUrl } from "../../../ApiPaths";

export const PersonTile = ({ id, profile_path, name, character, job }) => {
  return (
    <Wrapper to={`/people/${id}`}>
      <ProfileImage
        src={profile_path ? `${imagesBaseUrl}/w342${profile_path}` : noPicture}
        alt=""
      ></ProfileImage>
      {name && <Name>{name}</Name>}
      {character && <Character>{character}</Character>}
      {job && <Character>{job}</Character>}
    </Wrapper>
  );
};
