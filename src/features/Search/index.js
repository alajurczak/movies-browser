import { SearchBar, SearchBarIcon, StyledSearchIcon, SearchBarInput } from "./styled"

export const Search = () => {
    return (
        <SearchBar>
            <SearchBarIcon>
                <StyledSearchIcon />
            </SearchBarIcon>
            <SearchBarInput
                placeholder="Search for movies/people..."
            />
        </SearchBar>
    )
}