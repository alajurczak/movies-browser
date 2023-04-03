import { Genre } from "./Genre";
import {
  DescriptionWrapper,
  Subtitle,
  ImageWrapper,
  TileWrapper,
  Rate,
  RatingWrapper,
  Star,
  Title,
  Votes,
  StyledLink,
} from "./styled";
import { imagesBaseUrl } from "../../../ApiPaths";
import noPoster from "../MovieTile/Images/noPoster.png";

export const MovieTile = ({
  id,
  title,
  poster_path,
  vote_average,
  vote_count,
  release_date,
  genre_ids,
}) => {
  return (
    <TileWrapper key={id} id={id}>
      <ImageWrapper
        src={poster_path ? `${imagesBaseUrl}/w500/${poster_path}` : noPoster}
        alt=""
      ></ImageWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Subtitle>{new Date(release_date).getFullYear()}</Subtitle>
        <Genre genre_ids={genre_ids} />
        <RatingWrapper>
          <Star />
          <Rate>{vote_average}</Rate>
          <Votes>{vote_count} votes</Votes>
        </RatingWrapper>
      </DescriptionWrapper>
    </TileWrapper>
  );
};
