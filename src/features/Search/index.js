import { SearchBar, SearchBarIcon, StyledSearchIcon, SearchBarInput } from "./styled";
import { useDispatch } from "react-redux";
import { fetchSearch } from "./searchSlice";
import useQueryParameter from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";

export const Search = () => {
    const dispatch = useDispatch();

    const query = useQueryParameter("search");
    const replaceQueryParam = useReplaceQueryParameter();

    console.log(query);

    const onInputChange = ({ target }) => {
        replaceQueryParam({
            key: "search",
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
                placeholder="Search for movies/people..."
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchBar>
    )
}