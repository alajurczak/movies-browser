import styled from "styled-components";
const mobileBp = ({ theme }) => theme.breakpoints.mobileMax;

export const MovieList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-gap: 24px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));

  @media (max-width: ${mobileBp}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }
`;
