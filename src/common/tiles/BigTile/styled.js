import styled from "styled-components";
import { ReactComponent as Star } from "./Star.svg";

export const Container = styled.div`
    max-width: 1368px;
    margin: 64px 16px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    gap: 0 40px;
    grid-template-columns: minmax(auto, 312px) 1fr;
    grid-template-rows: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
      gap: 20px 28px;
      grid-template-columns: minmax(auto, 215px) 1fr;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 15px 16px;
        grid-template-columns: minmax(auto, 114px) 1fr;
        padding: 16px;
        margin: 16px;
    };
`;

export const Poster = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    grid-row: span 2;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
      width: 215px;
      height: 319px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      width: 114px;
      height: 169px;
    };
`;

export const Content = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
      grid-row: span 2;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-top: 8px;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        margin-top: 0px;
        margin-bottom: 4px;
    };
`;

export const Year = styled.div`
    font-size: 22px;
    line-height: 120%;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        line-height: 130%;
        margin-bottom: 8px;
    };
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

`;

export const SubTitle = styled.p`
    padding-right: 10px;
    color: ${({ theme }) => theme.colors.stormGray};
    margin-top: 0px;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    };
`;

export const Information = styled.p`
    margin-top: 0px;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
        line-height: 130%;
    };
`;

export const GenreWrapper = styled.div`
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        gap: 8px;
    };
`;
export const GenreTile = styled.div`
    padding: 8px 16px;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.colors.mystic};
    border-radius: 5px;
    font-size: 14px;
    line-height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 10px;
        line-height: 110%;
        margin: 0px;
        padding: 4px 8px;
        line-height: 110%;
    };
`;
export const VotesWrapper = styled.div`
    display: flex;
    align-items:center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 10px;
    };
`;

export const RatesWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 24px 0;
    line-height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 12px 0;
        margin: 0px;
    };
`;

export const StarIcon = styled(Star)`
    height: auto;
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 16px;
    };
`;

export const ActualRating = styled.p`
    margin: 0 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    };

`;
export const MaxRating = styled.p`
    margin: 0 12px 0 0;
    line-height: 120%;
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    };
`;

export const Votes = styled.p`
    margin: 0;
    line-height: 120%;
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 13px;
        line-height: 130%;
        color: ${({theme}) => theme.colors.waterloo};
    };
`;

export const TileArticle = styled.article`
    font-size: 20px;
    line-height: 160%;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        grid-row: 3;
        grid-column: span 2;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        line-height: 160%;
    };
`;
