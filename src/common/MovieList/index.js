import styled from "styled-components";
const mobileBp = ({ theme }) => theme.breakpoints.mobileMax;

export const MovieList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-gap: 24px;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: ${mobileBp}px) {
    gap: 16px;
  }
`;
