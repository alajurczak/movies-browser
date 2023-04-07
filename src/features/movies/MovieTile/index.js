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
import noPoster from "./Images/noPoster.png";

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
        src={poster_path ? `${imagesBaseUrl}/w500${poster_path}` : noPoster}
        alt=""
      ></ImageWrapper>
      <DescriptionWrapper>
        {title && <Title>{title}</Title>}
        {release_date && (
          <Subtitle>{new Date(release_date).getFullYear()}</Subtitle>
        )}
        {genre_ids && <Genre genre_ids={genre_ids} />}
        {vote_average && vote_count ? (
          <RatingWrapper>
            <Star />
            <Rate>{vote_average}</Rate>
            <Votes>{vote_count} votes</Votes>
          </RatingWrapper>
        ) : (
          <Star />
        )}
      </DescriptionWrapper>
    </TileWrapper>
  );
};
