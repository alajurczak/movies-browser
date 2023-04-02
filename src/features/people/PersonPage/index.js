import { BigTile } from "../../../common/BigTile";
import { SectionTitle } from "../../../common/SectionTitle/styled";
import { MovieTile } from "../../movies/MovieTile";
import { ContentContainer, Wrapper } from "./styled";

export const PersonPage = () => {
    return (
        <>
            <Wrapper>
                <BigTile />
                <SectionTitle>Movies - cast (liczba)</SectionTitle>
                <ContentContainer>
                    <MovieTile />
                    <MovieTile />
                    <MovieTile />
                    <MovieTile />
                </ContentContainer>
                <SectionTitle>Movies - crew (liczba)</SectionTitle>
                <ContentContainer>
                    <MovieTile />
                    <MovieTile />
                    <MovieTile />
                    <MovieTile />
                </ContentContainer>
            </Wrapper>
        </>
    );
};