import {
  StyledHeader,
  TitleLink,
  GridWrapper,
  Wrapper,
  StyledVideoIcon,
  TittleText,
  NavigationList,
  StyledNavLink,
  SearchBar,
  SearchBarIcon,
  SearchBarInput,
  StyledSearchIcon,
} from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <GridWrapper>
        <Wrapper>
          <TitleLink>
            <StyledVideoIcon />
            <TittleText>Movies Browser</TittleText>
          </TitleLink>
          <nav>
            <NavigationList>
              <li>
                <StyledNavLink>MOVIES</StyledNavLink>
              </li>
              <li>
                <StyledNavLink>PEOPLE</StyledNavLink>
              </li>
            </NavigationList>
          </nav>
        </Wrapper>
        <SearchBar>
          <SearchBarIcon>
            <StyledSearchIcon />
          </SearchBarIcon>
          <SearchBarInput placeholder="Search for movies..."/>
        </SearchBar>
      </GridWrapper>
    </StyledHeader>
  );
};

export default Header;
