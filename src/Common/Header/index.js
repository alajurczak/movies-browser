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
            {/*  waiting for HashRouter
                implementation */}
            <StyledVideoIcon />
            <TittleText>Movies Browser</TittleText>
          </TitleLink>
          <nav>
            <NavigationList>
              <li>
                <StyledNavLink>MOVIES</StyledNavLink>
                {/*  waiting for HashRouter
                implementation */}
              </li>
              <li>
                <StyledNavLink>PEOPLE</StyledNavLink>
                {/*  waiting for HashRouter
                implementation */}
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
