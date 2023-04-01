import { ProfileImage, Wrapper, Name } from "./styled"
import noPicture from './images/Picture.png';
import { imagesBaseUrl } from "../../../ApiPaths";

export const PersonTile = ({ id, profile_path, name }) => {
    return (
        <Wrapper key={id}>
            <ProfileImage src={profile_path ? `${imagesBaseUrl}/w342${profile_path}` : noPicture} alt=""></ProfileImage>
            {name && <Name>{name}</Name>}
        </Wrapper>
    );
};
