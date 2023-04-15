import {
  StyledHeader,
  TitleLink,
  GridWrapper,
  Wrapper,
  StyledVideoIcon,
  TittleText,
  NavigationList,
  StyledNavLink,
} from "./styled";
import { Search } from "../../features/Search";

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
        <Search />
      </GridWrapper>
    </StyledHeader>
  );
};

export default Header;
