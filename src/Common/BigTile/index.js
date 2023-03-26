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
  GenreTile,
  VotesWrapper,
  RatesWrapper,
  ActualRating,
  MaxRating,
  Votes,
  TileArticle,
  StarIcon,
} from "./styled";
import poster from "./images/poster.png";

export const BigTile = () => {
  return (
    <Container>
      <Poster src={poster} alt="" />
      <Content>
        <Title>Mulan</Title>
        <Year>2020</Year>
        <Wrapper>
          <SubTitle>Production:</SubTitle>
          <Information>China, USA</Information>
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
        <VotesWrapper>
          <RatesWrapper>
            <StarIcon />
            <ActualRating>7,8</ActualRating>
            <MaxRating>/10</MaxRating>
          </RatesWrapper>
          <Votes>335 votes</Votes>
        </VotesWrapper>
      </Content>
      <TileArticle>
        A young Chinese maiden disguises herself as a male warrior in order to
        save her father. Disguises herself as a male warrior in order to save
        her father. A young Chinese maiden disguises herself as a male warrior
        in order to save her father.
      </TileArticle>
    </Container>
  );
};
