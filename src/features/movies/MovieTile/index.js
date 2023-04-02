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
} from "./styled";
import { imagesBaseUrl } from "../../../ApiPaths";

export const MovieTile = ({
  id,
  title,
  poster_path,
  rating,
  votes,
  release_date,
  genre_ids,
}) => {

  return (
    <TileWrapper key={id} id={id}>
      <ImageWrapper
        src={`${imagesBaseUrl}/w500${poster_path}`}
        alt=""
      ></ImageWrapper>
      <DescriptionWrapper>
        {title && <Title>{title}</Title>}
        {release_date && <Subtitle>{new Date(release_date).getFullYear()}</Subtitle>}
        {genre_ids && <Genre genre_ids={genre_ids} />}
        <RatingWrapper>
          <Star />
          {rating && <Rate>{rating}</Rate>}
          {votes && <Votes>{votes} votes</Votes>}
        </RatingWrapper>
      </DescriptionWrapper>
    </TileWrapper>
  );
};
