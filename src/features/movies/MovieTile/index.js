import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesLoading, selectMovies } from "../popularMoviesSlice";
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

export const MovieTile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((fetchMoviesLoading()));
  }, [dispatch])

  const movies = useSelector(selectMovies);
  const posterPath = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      {movies.map(movie => (
        <TileWrapper key={movie.id}>
          <ImageWrapper src={`${posterPath}${movie.poster_path}`} alt=""></ImageWrapper>
          <DescriptionWrapper>
            <Title>{movie.original_title}</Title>
            <Subtitle>{new Date(movie.release_date).getFullYear()}</Subtitle>
            <Genre/>
            <RatingWrapper>
              <Star />
              <Rate>{movie.vote_average}</Rate>
              <Votes>{movie.vote_count} votes</Votes>
            </RatingWrapper>
          </DescriptionWrapper>
        </TileWrapper>
      ))}
    </>
  );
};
