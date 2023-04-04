import styled, { css } from "styled-components";
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;

export const GridList = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
  justify-content: center;
  list-style: none;

  @media (max-width: ${mobileMaxBp}px) {
    gap: 16px;
  }

  ${({ popularPeople }) =>
    popularPeople &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));

      @media (max-width: ${mobileMaxBp}px) {
        grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
      }
    `}
  ${({ popularMovies }) =>
    popularMovies &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));

      @media (max-width: ${mobileMaxBp}px) {
        grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      }
    `}
`;
