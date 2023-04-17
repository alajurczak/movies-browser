import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./images/SearchIcon.svg";
import { DebounceInput } from "react-debounce-input";
const mobileBp = ({ theme }) => theme.breakpoints.mobileMax;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBarIcon = styled.div`
  color: ${({ theme }) => theme.colors.waterloo};
  background-color: ${({ theme }) => theme.colors.white};
  height: 44px;
  width: 50px;
  border-radius: 32px 0 0 33px;
  display: flex;
  align-items: center;
  justify-content: right;

  @media (max-width: ${mobileBp}px) {
    height: 44px;
    width: 35px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  @media (max-width: ${mobileBp}px) {
    width: 16px;
  }
`;

export const SearchBarInput = styled(DebounceInput)`
  height: 44px;
  width: 100%;
  padding: 19px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-left: none;
  border-radius: 0 33px 33px 0;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${mobileBp}px) {
    height: 44px;
    width: 100%;
    padding: 10px;
  }
`;
