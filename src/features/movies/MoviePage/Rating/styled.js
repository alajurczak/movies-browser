import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./images/star.svg";

const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  @media (max-width: ${mobileMaxBp}px) {
    gap: 7px;
  }
  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      @media (max-width: ${mobileMaxBp}px) {
        flex-direction: row;
        align-items: center;
      }
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  height: 22px;

  @media (max-width: ${mobileMaxBp}px) {
    width: 16px;
    height: 16px;
  }
  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      width: 40px;
      height: 38px;
    `}
`;

export const Votes = styled.span`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${mobileMaxBp}px) {
    font-weight: 600;
    font-size: 13px;
  }
  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      font-size: 30px;

      @media (max-width: ${mobileMaxBp}px) {
        font-size: 14px;
      }
    `}
`;

export const VoteAmount = styled.span`
  font-size: 14px;
  @media (max-width: ${mobileMaxBp}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.stormGrey};
  }
  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      font-size: 16px;

      @media (max-width: ${mobileMaxBp}px) {
        color: white;
        font-size: 10px;
      }
    `}
`;

export const MaxVote = styled.span`
  font-size: 14px;

  @media (max-width: ${mobileMaxBp}px) {
    display: none;
  }
  ${({ location }) =>
    location === "backgroundPoster" &&
    css`
      @media (max-width: ${mobileMaxBp}px) {
        visibility: visible;
      }
    `}
`;
