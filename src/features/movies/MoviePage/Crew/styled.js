import styled from "styled-components";
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;

export const CrewTile = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-rows: auto 1fr;
  transition: 0.5s;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  padding: 16px;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.scienceBlue};
  }

  &:active {
    transform: scale(1.05);
  }

  @media (max-width: ${mobileMaxBp}px) {
    grid-template-columns: auto 1fr;
    padding: 12px;
  }
`;

export const CrewImage = styled.img`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  border-radius: 5px;

  @media (max-width: ${mobileMaxBp}px) {
    width: 114px;
    height: 169px;
  }
`;

export const CrewName = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.smoke};
  margin: 16px 0 0;

  @media (max-width: ${mobileMaxBp}px) {
    margin: 0 0 0 8px;
    font-size: 16px;
  }
`;

export const CrewRole = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${mobileMaxBp}px) {
    margin: 0 0 0 8px;
    font-size: 12px;
  }
`;
