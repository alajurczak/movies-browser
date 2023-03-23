import { ImageWrapper, MovieWrapper, DescriptionWrapper, Content, ExtraContent, Tag, WrapperTag, Star, RatingWrapper, Votes, Rates, ContentWrapper } from "./styled"

export const MovieTile = () => {
  return (
    <MovieWrapper>
      <ImageWrapper>
        {/* Poster downloaded from api */}
      </ImageWrapper>
      <DescriptionWrapper>
        <ContentWrapper>
          <Content>Film bardzo bardzo bardzo bardzo długi tytuł</Content>
          <ExtraContent>Rok</ExtraContent>
          <WrapperTag>
            <Tag>{"Tag"}</Tag>
            <Tag>{"Tag"}</Tag>
            <Tag>{"Tag"}</Tag>
            <Tag>{"Tag"}</Tag>
            <Tag>{"Tag"}</Tag>
          </WrapperTag>
        </ContentWrapper>
        <RatingWrapper>
          <Star />
          <Rates>{"9.9"}</Rates>
          <Votes>{"180"}</Votes>
        </RatingWrapper>
      </DescriptionWrapper>
    </MovieWrapper>
  )
}