import { ProfileImage, Wrapper, Name } from "./styled"
import Picture from './images/Picture.png';
import { imagesBaseUrl } from "../../../ApiPaths";

export const PersonTile = ({ id, profile_path, name }) => {
    return (
        <Wrapper key={id}>
            <ProfileImage src={`${imagesBaseUrl}/w342${profile_path}`} alt=""></ProfileImage>
            {name && <Name>{name}</Name>}
        </Wrapper>
    );
};
