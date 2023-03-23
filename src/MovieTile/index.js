import {
  ImageWrapper,
  MovieWrapper,
  DescriptionWrapper,
  Content,
  ExtraContent,
  Tag,
  WrapperTag,
  Star,
  RatingWrapper,
  Votes,
  Rates
} from "./styled"

export const MovieTile = () => {
  return (
    <MovieWrapper>
      <ImageWrapper>
        {/* Poster downloaded from api */}
      </ImageWrapper>
        <DescriptionWrapper>
          <Content>Film bardzo bardzo bardzo bardzo długi tytuł</Content>
          <ExtraContent>Rok</ExtraContent>
          <WrapperTag>
            <Tag>{"Tag"}</Tag>
            <Tag>{"Tag"}</Tag>
            <Tag>{"Tag"}</Tag>
            <Tag>{"Tag"}</Tag>
          </WrapperTag>
          <RatingWrapper>
            <Star />
            <Rates>{"9.9"}</Rates>
            <Votes>{"180 votes"}</Votes>
          </RatingWrapper>
        </DescriptionWrapper>
    </MovieWrapper>
  )
}