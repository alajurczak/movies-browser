import {
    Container,
    Content,
    Poster,
    Title,
    Year,
    Wrapper,
    SubTitle,
    Information,
    GenreWrapper,
    GenreTile
} from "./styled";
import poster from "../../../images/poster.png";


export const BigTile = () => {
    return (
        <Container>
            <Poster src={poster} alt="" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <Wrapper>
                    <SubTitle>Production:</SubTitle>
                    <Information>China, United States of America</Information>
                </Wrapper>
                <Wrapper>
                    <SubTitle>Release date:</SubTitle>
                    <Information>24.10.2020</Information>
                </Wrapper>
                <GenreWrapper>
                    <GenreTile>Action</GenreTile>
                    <GenreTile>Adventure</GenreTile>
                    <GenreTile>Drama</GenreTile>
                </GenreWrapper>
            </Content>
        </Container>
    );
};