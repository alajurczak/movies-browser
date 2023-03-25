import styled from "styled-components";
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;

export const GenreWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const GenreTag = styled.div`
    display: flex;
    padding: 8px 16px;
    font-size: 14px;
    height: 36px;
    border-radius: 5px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.smoke};

  @media (max-width: ${mobileMaxBp}px) {
    height: 19px;
    padding: 4px 8px;
    font-size: 10px;
    align-items: center;
  }
`;
