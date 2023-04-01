import { ProfileImage, Wrapper, Name } from "./styled"
import Picture from './images/Picture.png';

export const PersonTile = () => {
    return (
        <Wrapper>
            <ProfileImage src={Picture} alt=""></ProfileImage>
            <Name>Mulan Mulan</Name>
        </Wrapper>
    );
};
