import styled, { css } from "styled-components";
import { DummyActor } from "../DummyActor";
// import { Link } from "react-router-dom";
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledActorTile = styled.a`
  display: block;
  padding: 16px;
  height: 100%;
  text-align: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 170ms cubic-bezier(0.45, 0.05, 0.55, 0.95);

  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.scienceBlue};
  }

  @media (max-width: ${mobileMaxBp}px) {
    padding: 8px;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  aspect-ratio: 3/4;

  ${({ loaded }) =>
    !loaded &&
    css`
      display: none;
    `}
`;

export const ActorName = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.woodsmoke};
  word-break: break-word;

  @media (max-width: ${mobileMaxBp}px) {
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;

export const Role = styled.div`
  font-size: 18px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${mobileMaxBp}px) {
    font-size: 13px;
    margin: 8px 0 0 0;
  }
`;

