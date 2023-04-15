import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as VideoIcon } from "./images/VideoIcon.svg";
const mobileBp = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.black};
  padding: 23px 16px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${mobileBp}px) {
    padding: 16px;
    background: ${({ theme }) => theme.colors.black};
  }
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: ${mobileBp}px) {
    gap: 8px;
  }
`;

export const GridWrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);

  @media (max-width: ${mobileBp}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${mobileBp}px) {
    justify-content: space-between;
    gap: 20px;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  flex-shrink: 0;

  @media (max-width: ${mobileBp}px) {
    width: 17px;
    height: 17px;
  }
`;

export const TittleText = styled.div`
  font-weight: 500;
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: ${mobileBp}px) {
    font-size: 13px;
  }
`;

export const NavigationList = styled.div`
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: ${mobileBp}px) {
    gap: 12px;
    margin-left: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  background: none;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  padding: 13.5px 24px;
  text-decoration: none;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &.hover {
    cursor: pointer;
  }

  @media (max-width: ${mobileBp}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;