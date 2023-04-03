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
import { imagesBaseUrl } from "../../ApiPaths";
import { useEffect, useState } from "react";

export const BigTile = ({
  poster_path,
  title,
  release_date,
  place_of_birth,
  birthday,
  rating,
  votes,
  countries,
  article,
  genre_ids,
  profile_path,
}) => {
  const dateOfRelease = new Date(release_date);
  const dayOfBirth = new Date(birthday);

  return (
    <Container>
      {profile_path !== undefined && (
        <Poster src={`${imagesBaseUrl}/w342${profile_path}`} alt="" />
      )}

      <Content>
        {title && <Title>{title}</Title>}
        {release_date && <Year>{release_date.slice(0, 4)}</Year>}
        <>
          {countries && release_date ? (
            <>
              {countries ? (
                countries.length > 0 ? (
                  <Wrapper>
                    <SubTitle>Production:</SubTitle>
                    <Information>
                      {countries.map((country) => (
                        <>{country.name}</>
                      ))}
                    </Information>
                  </Wrapper>
                ) : null
              ) : null}
              {release_date ? (
                <Wrapper>
                  <SubTitle>Release date:</SubTitle>
                  <Information>
                    {dateOfRelease.toLocaleDateString("pl-PL")}
                  </Information>
                </Wrapper>
              ) : null}
            </>
          ) : null}

          {birthday || place_of_birth ? (
            <div>
              {birthday && (
                <Wrapper>
                  <SubTitle>Date of birth:</SubTitle>
                  <Information>
                    {dayOfBirth.toLocaleDateString("pl-PL")}
                  </Information>
                </Wrapper>
              )}
              {place_of_birth && (
                <Wrapper>
                  <SubTitle>Place of birth:</SubTitle>
                  <Information>{place_of_birth}</Information>
                </Wrapper>
              )}
            </div>
          ) : null}
        </>
      </Content>
      <TileArticle>{article}</TileArticle>
    </Container>
  );
};

// do dodania dla movies
/*
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
 </VotesWrapper> */
