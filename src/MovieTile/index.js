import { 
  DescriptionWrapper, 
  Subtitle, 
  ImageWrapper, 
  TileWrapper, 
  Rate, 
  RatingWrapper, 
  Star, 
  Tag, 
  TagsWraper, 
  Title, 
  Votes 
} from "./styled"

export const MovieTile = () => {
  return (

      <TileWrapper>
        <ImageWrapper>
        </ImageWrapper>
        <DescriptionWrapper>
          <Title>Video Title</Title>
          <Subtitle>
            2020
          </Subtitle>
          <TagsWraper>
            <Tag>tag 1</Tag>
            <Tag>tag 2</Tag>
            <Tag>tag 3</Tag>
            <Tag>tag 4</Tag>
          </TagsWraper>
          <RatingWrapper>
            <Star />
            <Rate>8.9</Rate>
            <Votes>120 votes</Votes>
          </RatingWrapper>
        </DescriptionWrapper>
      </TileWrapper>
 
  )
};