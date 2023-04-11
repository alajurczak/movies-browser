import styled from "styled-components";
const largeBp = ({ theme }) => theme.breakpoints.large;
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;
const mediumBp = ({ theme }) => theme.breakpoints.medium;

export const Wrapper = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
  list-style: none;
`;

export const ContentContainer = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 64px;
  display: grid;
  gap: 24px;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${largeBp}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: ${mobileMaxBp}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${mediumBp}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  } ;
`;
