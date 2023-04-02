
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
          <TitleLink to="/movies">
            <StyledVideoIcon />
            <TittleText>Movies Browser</TittleText>
          </TitleLink>
          <nav>
            <NavigationList>
              <li>
                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
              </li>
            </NavigationList>
          </nav>
        </Wrapper>
        <SearchBar>
          <SearchBarIcon>
            <StyledSearchIcon />
          </SearchBarIcon>
          <SearchBarInput placeholder="Search for movies..." />
          {/* temporary placeholder */}
        </SearchBar>
      </GridWrapper>
    </StyledHeader>
  );
};

export default Header;
