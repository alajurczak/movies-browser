import { useSelector } from "react-redux";
import { selectMovieDetails } from "../movieSlice";
import Rating from "../Rating";
import {
  Poster,
  Info,
  Title,
  BigPoster,
  Gradient,
} from "./styled";

const BackgroundPoster = () => {
  const movieInfo = useSelector(selectMovieDetails);

  return (
    <>
      {movieInfo.backdrop_path && (
        <Poster>
          <Gradient />
          <div>
            <BigPoster
              src={`https://image.tmdb.org/t/p/w1280/${movieInfo.backdrop_path}`}
              alt=""
            />
          </div>
          <Info>
            <Title>{movieInfo.original_title}</Title>
            <Rating
              location="backgroundPoster"
              averageVotes={movieInfo.vote_average.toFixed(1)}
              voteAmount={movieInfo.vote_count}
            />
          </Info>
        </Poster>
      )}
    </>
  );
};

export default BackgroundPoster;
