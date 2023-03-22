import styled from "styled-components";

export const Container = styled.div`
    max-width: 1368px;
    margin: 64px auto;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    gap: 0 40px;
    grid-template-columns: minmax(auto, 312px) 1fr;
    grid-template-rows: auto 1fr;
`;

export const Poster = styled.img`
    width: 312px;
    height: 464px;
    border-radius: 5px;
    grid-row: span 2;
`;

export const Content = styled.div`
    
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-top: 8px;
    margin-bottom: 24px;
`;

export const Year = styled.div`
    font-size: 22px;
    line-height: 120%;
    margin-bottom: 24px;
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

`;
export const Information = styled.p`
    margin-top: 0px;
    margin-bottom: 8px;
`;

export const GenreWrapper = styled.div`
    margin-top: 16px;
    display: flex;
    
`;
export const GenreTile = styled.div`
    padding: 8px 16px;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.colors.mystic};
    border-radius: 5px;
    font-size: 14px;
    line-height: 100%;
`;
export const VotesWrapper = styled.div`
    display: flex;
    align-items:center;
`;

export const RatesWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 24px 0;
    line-height: 100%;
`;

export const ActualRating = styled.p`
    margin: 0 8px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;

`;
export const MaxRating = styled.p`
    margin: 0 12px 0 0;
    line-height: 120%;
    font-size: 14px;
`;

export const Votes = styled.p`
    margin: 0;
    line-height: 120%;
    font-size: 14px;
`;

export const TileArticle = styled.article`
    font-size: 20px;
    line-height: 160%;
`;
