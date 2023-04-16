import { SearchBar, SearchBarIcon, StyledSearchIcon, SearchBarInput } from "./styled";
import { useDispatch } from "react-redux";
import { fetchSearch } from "./searchSlice";
import useQueryParameter, { searchQueryParamName } from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { useLocation } from "react-router-dom";

export const Search = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParam = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParam({
            value: target.value.trim(),
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(fetchSearch(query));
    };

    return (
        <SearchBar onSubmit={onFormSubmit}>
            <SearchBarIcon>
                <StyledSearchIcon />
            </SearchBarIcon>
            <SearchBarInput
                placeholder=
                {location.pathname.includes("people")
                    ? "Search for people..."
                    : "Search for movies..."}
                value={query || ""}
                onChange={onInputChange}
                debounceTimeout={300}
            />
        </SearchBar>
    )
}